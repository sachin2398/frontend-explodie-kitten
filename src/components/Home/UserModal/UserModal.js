import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextField, Button, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { getSetUser } from "../../../redux/actions/user";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    textAlign: "center",
    zIndex: 1000,
    maxWidth: "80%",
    width: "300px",
    height: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    color: "#FF4500",
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
  submitButton: {
    backgroundColor: "#FF4500",
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha("#FF4500", 0.8),
    },
  },
}));

const UserModal = ({ getSetUser }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getSetUser(username);
  };

  return (
    <Box className={classes.modalContainer} component={Paper} elevation={3}>
      <Typography component="h2" variant="h2" className={classes.title}>
        Enter A Username
      </Typography>
      <form onSubmit={submitHandler}>
        <TextField
          className={classes.textField}
          label="Username"
          size="small"
          value={username}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          size="large"
        >
          Play
        </Button>
      </form>
    </Box>
  );
};

UserModal.propTypes = {
  getSetUser: PropTypes.func.isRequired,
};

export default connect(null, { getSetUser })(UserModal);
