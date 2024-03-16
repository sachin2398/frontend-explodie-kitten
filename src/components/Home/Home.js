import React, { useState } from "react";
import { Box, Button, Typography, makeStyles, Paper } from "@material-ui/core";
import Modal from "../Modal";
import UserModal from "./UserModal";
import { alpha } from "@material-ui/core/styles";
import backgroundImage from "../../assets/ex-2.png";
import logo1 from "../../assets/hero.jpg";
import logo2 from "../../assets/expo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center left bottom",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "center",
    },
  },
  contentContainer: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
    zIndex: 1,
    textAlign: "left",
  },
  title: {
    fontWeight: "bold",
    fontSize: "3rem",
    textTransform: "uppercase",
    color: "#FF4500",
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: "2px",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  description: {
    fontSize: "1.5rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#FFA500",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  startButton: {
    backgroundColor: "#FF4500",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: theme.spacing(1, 4),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: alpha("#FF4500", 0.8),
    },
  },
  logoContainer: {
    position: "absolute",
    top: "60%",
    left: "3%",
    transform: "translateY(-20%)",
    display: "flex",
    gap: "30px",
    alignItems: "center",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      top: "auto",
      bottom: theme.spacing(4),
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  logo: {
    width: "400px",
    height: "300px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "auto",
      marginBottom: theme.spacing(2),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.root} component={Paper} elevation={0}>
      <Box className={classes.contentContainer}>
        <Typography component="h2" variant="h3" className={classes.title}>
          Welcome to
          <br />
          The Exploding Kitten Game!
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Are you ready to experience the thrill of an exploding kitten?
          <br />
          Join us now and embark on an adventure like no other!
        </Typography>
        <Button
          variant="contained"
          size="large"
          className={classes.startButton}
          onClick={() => setOpen(true)}
        >
          Let's Start
        </Button>
      </Box>
      <Box className={classes.logoContainer}>
        <img src={logo1} alt="Logo 1" className={`${classes.logo}`} />
        <img src={logo2} alt="Logo 2" className={`${classes.logo}`} />
      </Box>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <UserModal />
      </Modal>
    </Box>
  );
};

export default Home;
