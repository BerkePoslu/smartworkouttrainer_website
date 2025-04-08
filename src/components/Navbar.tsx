import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { motion } from "framer-motion";

const Navbar = () => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        sx={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            SmartWorkoutApp
          </Typography>
          <Box>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{ mx: 1 }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={{ mx: 1 }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/download"
              sx={{ mx: 1 }}
            >
              Download
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
