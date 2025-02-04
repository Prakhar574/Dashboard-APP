import React from "react";
import { Typography, Box, Button, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Assignment, Timer, Dashboard as DashboardIcon } from "@mui/icons-material"; 


const heroSectionStyle = {
  background: "linear-gradient(to right, #FF8A00, #E52E71)", 
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  boxSizing: "border-box",
  borderRadius: "10px", 
  animation: "gradientAnimation 15s ease infinite", 
};

const sectionStyle = {
  padding: "50px 0",
  backgroundColor: "#ffffff", 
};

const featureCardStyle = {
  padding: "20px",
  textAlign: "center",
  boxShadow: 3,
  backgroundColor: "#FFEB3B", 
  borderRadius: "12px", 
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FF9800", 
  },
};

const Home = () => {
  
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <div>
     
      <animated.div style={animationProps}>
        <Box style={heroSectionStyle}>
          <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: "20px", color: "white" }}>
            Track your data, monitor progress, and visualize trends in real time.
          </Typography>

          <Button variant="contained" color="secondary" size="large">
            <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
              Go to Dashboard
            </Link>
          </Button>
        </Box>
      </animated.div>

     
      <Container sx={sectionStyle}>
        <Typography variant="h4" align="center" sx={{ marginBottom: "30px", fontWeight: "bold", color: "black" }}>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box sx={featureCardStyle}>
              <Assignment sx={{ fontSize: 40, color: "#1976d2" }} /> 
              <Typography variant="h6" sx={{ marginBottom: "10px", color: "black" }}>
                User Data Form
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px", color: "black" }}>
                Complete the user form and track your profile with progress indicators.
              </Typography>
              <Button variant="contained" color="secondary">
                <Link to="/user-form" style={{ color: "white", textDecoration: "none" }}>
                  Start Now
                </Link>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={featureCardStyle}>
              <Timer sx={{ fontSize: 40, color: "#1976d2" }} /> 
              <Typography variant="h6" sx={{ marginBottom: "10px", color: "black" }}>
                Counter
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px", color: "black" }}>
                Track the counter with real-time updates and interactive charts.
              </Typography>
              <Button variant="contained" color="secondary">
                <Link to="/counter" style={{ color: "white", textDecoration: "none" }}>
                  Start Counting
                </Link>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={featureCardStyle}>
              <DashboardIcon sx={{ fontSize: 40, color: "#1976d2" }} /> 
              <Typography variant="h6" sx={{ marginBottom: "10px", color: "black" }}>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px", color: "black" }}>
                Visualize your data trends and track progress on the dashboard.
              </Typography>
              <Button variant="contained" color="secondary">
                <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
                  Go to Dashboard
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

    
      <Box sx={{ textAlign: "center", padding: "50px", backgroundColor: "#FF8A00", color: "white" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Ready to take control of your data?
        </Typography>
        <Button variant="contained" size="large" sx={{ fontSize: "16px", padding: "12px 40px", backgroundColor: "#E52E71" }}>
          <Link to="/user-form" style={{ color: "white", textDecoration: "none" }}>
            Start Your Journey
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
