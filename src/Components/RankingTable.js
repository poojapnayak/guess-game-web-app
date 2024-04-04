import React from "react";
import "./RankingTable.css";

const defaultRankings = new Array(5).fill({ name: "-", score: "-" });

function RankingTable({ rankings = defaultRankings }) {
  const sortedPlayers = rankings.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="RankingTable">
      <h3>Ranking</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name ? player.name : "-"}</td>
              <td>{player.score ? player.score : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RankingTable;
