import React from "react";
import "./CurrentRound.css";

function CurrentRound({ players }) {
  console.log("player--", players);
  // Table layout for displaying current round details
  return (
    <div className="CurrentRound">
      <h3>Current Round</h3>
      <table className="RoundTable">
        <thead>
          <tr>
            <th style={{ fontWeight: "lighter" }}>Name</th>
            <th style={{ fontWeight: "lighter" }}>Points</th>
            <th style={{ fontWeight: "lighter" }}>Multiplier</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>
                {player.points !== null && player.multiplier !== null
                  ? (player.points * player.multiplier).toFixed(2)
                  : "-"}
              </td>
              <td>{player.multiplier !== null ? player.multiplier : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentRound;
