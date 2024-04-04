import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onLogin(name);
    }
  };

  return (
    <div className="Login">
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <label>Please Insert Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Accept</button>
      </form>
    </div>
  );
}

export default Login;
