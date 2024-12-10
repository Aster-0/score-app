import React, { useState } from "react";
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChatWindow from "./ChatWindow"; // Import the ChatWindow component

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  chatButton: {
    position: "absolute",
    right: "10px",
    background: "#ff5722", // Chat button color
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
}));

const Navbar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat window
  const classes = useStyle();

  // Toggle the chat window visibility
  const toggleChatWindow = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Live Score
          </Typography>

          {/* Chat Button */}
          <Button
            variant="contained"
            className={classes.chatButton}
            onClick={toggleChatWindow}
          >
            Chat with Friends
          </Button>
        </Toolbar>
      </AppBar>

      {/* Conditionally render ChatWindow */}
      {isChatOpen && <ChatWindow closeChat={toggleChatWindow} />}
    </div>
  );
};

export default Navbar;
