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
import SmartWorkoutIcon from "./SmartWorkoutIcon";

const Navbar = () => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        sx={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}
      >
        <Toolbar>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <SmartWorkoutIcon
                sx={{
                  fontSize: 40,
                  mr: 1,
                  color: "#fff",
                  background: "#000",
                  borderRadius: "8px",
                  padding: "6px",
                  boxShadow: "0 0 10px rgba(0, 168, 255, 0.3)",
                }}
              />
            </motion.div>
            <Typography
              variant="h6"
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ fontWeight: 700 }}
            >
              SmartWorkoutApp
            </Typography>
          </Box>
          <Box>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{
                mx: 1,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={{
                mx: 1,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/download"
              sx={{
                mx: 1,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
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
