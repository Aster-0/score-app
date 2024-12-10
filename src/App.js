import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import MyCard from "./components/MyCard";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import { getMatches } from "./api/api";
import "./App.css"; // Custom styles

function App() {
  const [matches, setMatches] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  const toggleChatWindow = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <h1 className="title">Live Cricket Scoring</h1>
        <Typography variant="h5" align="center" className="sub-title">
          Get the latest scores and stats in real-time!
        </Typography>
        <Container>
          <Grid container spacing={4} justify="center">
            {matches.map((match) => (
              <Grid item xs={12} sm={6} md={4} key={match.id}>
                <MyCard match={match} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
