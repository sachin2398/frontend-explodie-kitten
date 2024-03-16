import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLeaderBoard } from "../../../redux/actions/user";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";

const LeaderBoard = ({ leaderBoard, getLeaderBoard }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (leaderBoard.loading) {
      getLeaderBoard();
    } else {
      setUsers([...leaderBoard.users]);
    }
  }, [leaderBoard, getLeaderBoard]);

  return (
    <Box
      position="relative"
      boxShadow="0 2px 4px rgba(0,0,0,0.3)"
      minHeight="60%"
      pt={2}
      bgcolor="#333" /* Dark theme background color */
      color="#fff" /* Text color */
      borderRadius={8}
      p={2}
    >
      <Typography
        align="center"
        variant="h5"
        gutterBottom
        style={{ color: "#FFD700" }}
      >
        Leaderboard
      </Typography>

      <Box position="absolute" right={16} top={16} cursor="pointer">
        <Button variant="outlined" color="secondary" onClick={getLeaderBoard}>
          <Refresh />
        </Button>
      </Box>

      <Box mt={3}>
        <Divider variant="middle" />
      </Box>

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" fontWeight="bold">
          <Typography variant="subtitle1" style={{ color: "#00FFFF" }}>
            Username
          </Typography>
          <Typography variant="subtitle1" style={{ color: "#FF00FF" }}>
            Points
          </Typography>
        </Box>
        <Divider />
      </Box>

      {users.map((user, index) => (
        <Box
          key={user._id}
          bgcolor={
            index % 2 === 0 ? "#444" : "#333"
          } /* Alternate row background color */
          borderRadius={4}
          boxShadow="0 1px 2px rgba(0,0,0,0.3)"
          p={1}
          mt={1}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              style={{ color: index % 2 === 0 ? "#FFA500" : "#00FF7F" }}
            >
              {user.username}
            </Typography>
            <Typography style={{ color: "#FF6347" }}>{user.win}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

LeaderBoard.propTypes = {
  getLeaderBoard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leaderBoard: state.leaderBoard,
});

export default connect(mapStateToProps, { getLeaderBoard })(LeaderBoard);
