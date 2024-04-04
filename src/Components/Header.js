import React from "react";
import "./Header.css";

function Header({ userName, startTime }) {
  return (
    <header className="Header">
      <div className="Header-user">
        <span className="points">1,000</span>
        <span className="username">{userName}</span>
        <span className="time">{startTime}</span>{" "}
      </div>
    </header>
  );
}

export default Header;
