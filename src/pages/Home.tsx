import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import your screenshots
import screenshot1 from "../assets/images/Screenshot 2025-04-08 at 13.33.40.png";
import screenshot2 from "../assets/images/Screenshot 2025-04-08 at 13.57.05.png";
import screenshot3 from "../assets/images/Screenshot 2025-04-08 at 13.57.18.png";

const screenshots = [screenshot1, screenshot2, screenshot3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
              fontSize: "1.2rem",
              lineHeight: 1.8,
            }}
          >
            SmartWorkoutTrainer revolutionizes fitness with personalized workouts,
            real-time Stepcounter, and adaptive training plans that help your
            progress.
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/download")}
              sx={{
                px: 4,
                py: 2,
                fontSize: "1.2rem",
                borderRadius: "30px",
                textTransform: "uppercase",
                background: "linear-gradient(45deg, #00a8ff 30%, #0097e6 90%)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #0097e6 30%, #00a8ff 90%)",
                },
              }}
            >
              Download Now
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
