import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryIcon from "@mui/icons-material/Memory";

// Import your screenshots and icon
import screenshot1 from "../assets/images/Screenshot 2025-04-08 at 13.33.40.png";
import screenshot2 from "../assets/images/Screenshot 2025-04-08 at 13.57.05.png";
import screenshot3 from "../assets/images/Screenshot 2025-04-08 at 13.57.18.png";
import appIcon from "../assets/images/smart-workout-icon.png";

const screenshots = [screenshot1, screenshot2, screenshot3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    // Using the correct path from public directory
    const apkUrl = "/SmartWorkoutApp.apk";
    window.location.href = apkUrl;
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            component="img"
            src={appIcon}
            alt="Smart Workout App"
            sx={{
              width: 120,
              height: 120,
              mb: 3,
              borderRadius: "24px",
              boxShadow: "0 4px 20px rgba(0, 168, 255, 0.3)",
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              mb: 2,
              background: "linear-gradient(45deg, #fff, #00a8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SmartWorkoutTrainer
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{ textAlign: "center", mb: 4, color: "primary.main" }}
          >
            Transform your fitness journey with Tech-powered workouts
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            height: "400px",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(0, 168, 255, 0.4)",
            mb: 6,
          }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.img
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "20px",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
          <Button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + screenshots.length) % screenshots.length
              )
            }
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              "&:hover": { background: "primary.main" },
            }}
          >
            ←
          </Button>
          <Button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % screenshots.length)
            }
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              "&:hover": { background: "primary.main" },
            }}
          >
            →
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            mb: 8,
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              flex: "1 1 300px",
              maxWidth: "400px",
              p: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <PhoneAndroidIcon sx={{ fontSize: 48, color: "primary.main" }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Android 8.0+
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              Compatible with modern Android devices
            </Typography>
          </Paper>
          <Paper
            sx={{
              flex: "1 1 300px",
              maxWidth: "400px",
              p: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <MemoryIcon sx={{ fontSize: 48, color: "primary.main" }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              2GB RAM
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              Minimum memory requirement
            </Typography>
          </Paper>
          <Paper
            sx={{
              flex: "1 1 300px",
              maxWidth: "400px",
              p: 4,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <StorageIcon sx={{ fontSize: 48, color: "primary.main" }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              100MB Storage
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              Free space required
            </Typography>
          </Paper>
        </Box>

        <Paper
          sx={{
            p: 6,
            maxWidth: "800px",
            mx: "auto",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                borderRadius: "30px",
                textTransform: "uppercase",
                background: "linear-gradient(45deg, #00a8ff 30%, #0097e6 90%)",
                boxShadow: "0 4px 15px rgba(0, 168, 255, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #0097e6 30%, #00a8ff 90%)",
                  boxShadow: "0 6px 20px rgba(0, 168, 255, 0.4)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Download APK
            </Button>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "text.secondary",
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Want to explore the source code or contribute to the project?
            </Typography>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/BerkePoslu/workout_flutter_app/tree/main/workout_app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                borderWidth: "2px",
                color: "primary.main",
                borderColor: "primary.main",
                "&:hover": {
                  borderColor: "primary.dark",
                  backgroundColor: "rgba(0, 168, 255, 0.04)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View on GitHub
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
