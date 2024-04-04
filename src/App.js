import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import GameArea from "./Components/GameArea";
import Sidebar from "./Components/Sidebar";
import SpeedSlider from "./Components/SpeedSlider";
import Login from "./Components/Login";
import CurrentRound from "./Components/CurrentRound.js";
import MultiplierGraph from "./Components/MultiplierGraph";

function App() {
  // Initialize state with default starting values or empty strings
  const [points, setPoints] = useState("100");
  const [multiplier, setMultiplier] = useState("1.0");
  const [gameStarted, setGameStarted] = useState(false);
  const [startTime, setStartTime] = useState(new Date().toLocaleTimeString()); // Set to current time
  const [user, setUser] = useState(null);

  const [players, setPlayers] = useState([
    { name: "pooja", points: null, multiplier: null },
  ]);

  const [rankings, setRankings] = useState([
    { no: "1", name: "pooja", score: null },
  ]);

  const [speed, setSpeed] = useState(1);

  const handleLogin = (userName) => {
    setUser({ name: userName });
  };

  const handleSpeedChange = (newValue) => {
    console.log("newvalueee--", newValue);
  };

  const handlePointsChange = (e) => {
    setPoints(e.target.value);
  };

  const handleMultiplierChange = (e) => {
    setMultiplier(e.target.value);
  };

  const handleStartGameSubmit = (e) => {
    e.preventDefault();
    setGameStarted(true);

    setPlayers(
      players.map((player) => {
        if (player.name === "pooja") {
          return {
            ...player,
            points,
            multiplier,
          };
        }
      })
    );
  };

  return (
    <div className="App">
      <main className="main-content">
        <div className="left-container">
          {user ? (
            <>
              <Header userName={user.name} startTime={startTime} />
              <form
                className="top-bar input-group"
                on
                onSubmit={handleStartGameSubmit}
              >
                <div>
                  <label className="points-label">Points:</label>
                  <label className="multiplier-label">Multiplier:</label>
                </div>
                <div>
                  <input
                    className="input-field"
                    type="number"
                    value={points}
                    onChange={handlePointsChange}
                  />
                  <input
                    className="input-field "
                    type="number"
                    step="0.01"
                    value={multiplier}
                    onChange={handleMultiplierChange}
                  />
                </div>
                <button className="playersInputs-button" type="submit">
                  Start Game
                </button>
              </form>
              <div className="speedSlider-container">
                <SpeedSlider onSpeedChange={handleSpeedChange} />
              </div>
              <div className="currentRound-container">
                <CurrentRound players={players} />
              </div>
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
        <MultiplierGraph
          gameStarted={gameStarted}
          points={points}
          multiplier={multiplier}
        />

        <Sidebar />
      </main>
    </div>
  );
}

export default App;
