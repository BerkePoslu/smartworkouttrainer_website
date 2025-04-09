import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

// Pages
import Home from "./pages/Home";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Create theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00a8ff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
