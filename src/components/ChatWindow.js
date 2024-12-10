import React, { useState, useEffect } from "react";
import { TextField, Button, List, ListItem, Typography, Paper } from "@material-ui/core";
import { database, ref, push, onChildAdded, onValue } from "../firebase"; // Updated import

const ChatWindow = ({ closeChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch messages from Firebase
  useEffect(() => {
    const messagesRef = ref(database, "messages");

    // Set up a listener for changes to the "messages" node
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = [];
      for (let key in data) {
        messageList.push(data[key]);
      }
      setMessages(messageList); // Update state with new messages
    });

    // Cleanup listener on unmount
    return () => unsubscribe(); // Remove listener when component unmounts
  }, []);

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Send a new message to Firebase
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        timestamp: Date.now()
      };

      // Push new message to Firebase
      const messagesRef = ref(database, "messages");
      push(messagesRef, newMessage);

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
        backgroundColor: "#FFFFFF",
        padding: "10px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Chat with Fans
        <Button
          onClick={closeChat}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#ff5722",
            color: "white",
            borderRadius: "50%",
            padding: "8px 12px",
          }}
        >
          X
        </Button>
      </Typography>

      {/* Chat Messages */}
      <List style={{ maxHeight: "300px", overflowY: "scroll", paddingBottom: "10px" }}>
        {messages.map((msg, index) => (
          <ListItem key={index} style={{ color: "#000000", marginBottom: "10px" }}>
            {msg.text}
          </ListItem>
        ))}
      </List>

      <TextField
        label="Type a message"
        value={message}
        onChange={handleMessageChange}
        fullWidth
        variant="outlined"
        style={{ marginBottom: "10px", backgroundColor: "#FFFFFF" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        fullWidth
        style={{ background: "#ff5722", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)" }}
      >
        Send
      </Button>
    </Paper>
  );
};

export default ChatWindow;
