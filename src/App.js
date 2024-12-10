import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import ChatWindow from "./components/ChatWindow"; // Import the new ChatWindow component

function App() {
  const [matches, setMatches] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat window

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log("data", data.data);
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  // Toggle chat window visibility
  const toggleChatWindow = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Real Time Cricket Scoring Application</h1>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard key={match.id} match={match} />
            ))}
          </Grid>
        </Grid>
      </Container>

      {/* Chat Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={toggleChatWindow}
      >
        Chat
      </Button>

      {/* Conditional rendering of the Chat Window */}
      {isChatOpen && <ChatWindow closeChat={toggleChatWindow} />}
    </div>
  );
}

export default App;
