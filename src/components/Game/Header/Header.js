import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";

const Header = ({ username }) => {
  return (
    <Box
      boxShadow="0 1px 5px 1px rgba(0,0,0,0.25)"
      mb={4}
      px={{ xs: 2, md: 5 }}
      py={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#333" /* Dark theme background color */
      color="#FF4500" /* Text color */
    >
      <Typography component="h1" variant="h5">
        The Exploding Kitten
      </Typography>

      <Typography component="div">
        <Box component="span" px="2px">
          <FiberManualRecord color="secondary" fontSize="small" />
        </Box>
        <b>{username}</b>
      </Typography>
    </Box>
  );
};

export default Header;
