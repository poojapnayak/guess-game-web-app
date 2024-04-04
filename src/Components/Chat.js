import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState(["Welcome to the game!"]); // Initial messages
  const [inputMessage, setInputMessage] = useState(""); // State to track the input field value

  // Function to add new message to the chat
  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage]);
      setInputMessage(""); // Clear the input field after sending
    }
  };

  // Function to capture the input field changes
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Function to capture Enter key press in input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="Chat">
      <h3>Chat</h3>
      <div className="ChatMessages">
        {messages.map((message, index) => (
          <div key={index} className="Message">
            {message}
          </div>
        ))}
      </div>
      <div className="ChatInput">
        <input
          className="Chat-input"
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
