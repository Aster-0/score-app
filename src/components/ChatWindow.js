import React, { useState } from "react";
import { TextField, Button, List, ListItem, Typography, Paper } from "@material-ui/core";

// ChatWindow Component
const ChatWindow = ({ closeChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // To store chat messages

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage(""); // Clear input field
    }
  };

  return (
    <Paper
      style={{
        position: "fixed",
        right: 0,
        bottom: 0,
        width: "300px",
        height: "400px",
        borderRadius: "10px 0 0 10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#f4f4f9",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Chat
        <Button
          onClick={closeChat}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          X
        </Button>
      </Typography>

      {/* Chat Messages */}
      <List style={{ maxHeight: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>{msg}</ListItem>
        ))}
      </List>

      {/* Message Input */}
      <TextField
        label="Type a message"
        value={message}
        onChange={handleMessageChange}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        fullWidth
      >
        Send
      </Button>
    </Paper>
  );
};

export default ChatWindow;
