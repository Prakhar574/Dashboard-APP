
import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Card } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { useSpring, animated } from "react-spring";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [counter, setCounter] = useState(0); 
  const [counterHistory, setCounterHistory] = useState([0]); 

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    } else {
      alert("No user data found. Please fill out the user form.");
    }
  }, []);

 
  const increment = () => {
    setCounter((prev) => {
      const newCount = prev + 1;
      setCounterHistory((prevHistory) => [...prevHistory, newCount]); 
      return newCount;
    });
  };

  const decrement = () => {
    setCounter((prev) => {
      const newCount = prev - 1;
      setCounterHistory((prevHistory) => [...prevHistory, newCount]); 
      return newCount;
    });
  };

  const reset = () => {
    setCounter(0);
    setCounterHistory([0]); 
  };

  
  const counterData = {
    labels: counterHistory.map((_, index) => `Click ${index + 1}`), 
    datasets: [
      {
        label: "Counter Value",
        data: counterHistory,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };


  const userProfileData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Engagement",
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [
          userData?.gender === "Male" ? 1 : 0,
          userData?.gender === "Female" ? 1 : 0,
          userData?.gender === "Other" ? 1 : 0,
        ],
        backgroundColor: ["#42a5f5", "#ff7043", "#66bb6a"],
      },
    ],
  };


  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animationProps}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", color: "#1976d2", marginTop: 4 }}>
        Dashboard
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", gap: 3 }}>
        {/* User Profile Section */}
        <Card sx={{ padding: "20px", width: "48%", boxShadow: 3, backgroundColor: "#f5f5f5" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#1976d2" }}>
            User Profile
          </Typography>
          {userData ? (
            <>
              <Typography>Name: {userData.name}</Typography>
              <Typography>Address: {userData.address}</Typography>
              <Typography>Email: {userData.email}</Typography>
              <Typography>Phone: {userData.phone}</Typography>
              <Typography>User ID: {userData.userId}</Typography>
              <Typography>Gender: {userData.gender}</Typography>
            </>
          ) : (
            <Typography>Loading user data...</Typography>
          )}
        </Card>

        {/* Counter History Section */}
        <Card sx={{ padding: "20px", width: "48%", boxShadow: 3, backgroundColor: "#e3f2fd" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#1976d2" }}>
            Counter History
          </Typography>
          <Line data={counterData} />
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <Button variant="contained" color="primary" onClick={increment} sx={{ marginRight: "10px" }}>
              Increment
            </Button>
            <Button variant="contained" color="secondary" onClick={decrement} sx={{ marginRight: "10px" }}>
              Decrement
            </Button>
            <Button variant="contained" color="default" onClick={reset}>
              Reset
            </Button>
          </Box>
        </Card>
      </Box>

      {/* Gender Distribution Pie Chart */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Card sx={{ padding: "20px", width: "48%", boxShadow: 3, backgroundColor: "#fff" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px", color: "#1976d2" }}>
            Gender Distribution
          </Typography>
          <Pie data={genderData} />
        </Card>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
