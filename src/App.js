import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);
  

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log("data",data.data);
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <h1>Real Time Cricket Scoring Application</h1>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
