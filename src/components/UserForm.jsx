
import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Card, Box, RadioGroup, FormControlLabel, Radio, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    gender: "", 
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [showSavedData, setShowSavedData] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = ""; 
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      setUnsavedChanges(true);
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    const userId = Math.random().toString(36).substr(2, 9); 
    const user = { ...userData, userId };
    localStorage.setItem("userData", JSON.stringify(user));
    setSavedData(user); 
    setUnsavedChanges(false); 
    alert("User data saved!");
    navigate("/dashboard");
  };


  const handleDisplaySavedData = () => {
    const data = localStorage.getItem("userData");
    if (data) {
      setSavedData(JSON.parse(data));
      setShowSavedData(true);
    } else {
      alert("No data found.");
    }
  };


  const calculateCompletion = () => {
    const filledFields = Object.values(userData || {}).filter((value) => value).length;
    const totalFields = Object.keys(userData || {}).length;
    return (filledFields / totalFields) * 100;
  };

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "400px", padding: "20px", boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>User Data Form</Typography>
        
       
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="body1">Profile Completion</Typography>
          <LinearProgress variant="determinate" value={calculateCompletion()} />
          <Typography variant="body2" sx={{ textAlign: "center", marginTop: "10px" }}>
            {Math.round(calculateCompletion())}% Completed
          </Typography>
        </Box>

        <Box mb={2}>
          <TextField
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      
        <Box mb={2}>
          <Typography variant="body1">Gender</Typography>
          <RadioGroup
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDisplaySavedData}
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            Display Saved Data
          </Button>
        </Box>
      </Card>

    
      {showSavedData && savedData && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="h6">Saved Data</Typography>
          <Typography>Name: {savedData.name}</Typography>
          <Typography>Address: {savedData.address}</Typography>
          <Typography>Email: {savedData.email}</Typography>
          <Typography>Phone: {savedData.phone}</Typography>
          <Typography>User ID: {savedData.userId}</Typography>
          <Typography>Gender: {savedData.gender}</Typography>
        </div>
      )}
    </div>
  );
};

export default UserForm;
