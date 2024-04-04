import React, { useState } from "react";
import "./Sidebar.css";
import RankingTable from "./RankingTable";
import Chat from "./Chat";

function Sidebar() {
  const [rankings, setRanking] = useState([]);

  return (
    <aside className="Sidebar">
      <RankingTable />
      <Chat />
    </aside>
  );
}

export default Sidebar;
