import React from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryIcon from "@mui/icons-material/Memory";

const Download = () => {
  const handleDownload = () => {
    // Using the public URL approach
    const apkUrl = process.env.PUBLIC_URL + "/SmartWorkoutApp.apk";
    window.location.href = apkUrl;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #00a8ff, #0097e6)",
              borderRadius: "2px",
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #fff, #00a8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Download SmartWorkoutApp
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Transform your fitness journey with our AI-powered workout companion
          </Typography>
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
      </motion.div>
    </Container>
  );
};

export default Download;
