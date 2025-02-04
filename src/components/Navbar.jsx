
import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button, AppBar, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            My Dashboard App
          </Typography>
        </Box>

       
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "white", 
                  color: "black", 
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/user-form" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              User Form
            </Button>
          </Link>
          <Link to="/rich-text-editor" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Rich Text Editor
            </Button>
          </Link>
          <Link to="/counter" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Counter
            </Button>
          </Link>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Dashboard
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
