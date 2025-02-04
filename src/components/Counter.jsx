
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import "../Counter.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <Box className="counter-card">
        <Typography variant="h5" gutterBottom>Counter: {count}</Typography>
        <Box className="counter-buttons">
          <Button
            variant="contained"
            onClick={increment}
            sx={{ marginRight: "10px", backgroundColor: "#1976d2" }}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            onClick={decrement}
            sx={{ marginRight: "10px", backgroundColor: "#f44336" }}
          >
            Decrement
          </Button>
          <Button
            variant="contained"
            onClick={reset}
            sx={{ backgroundColor: "#9e9e9e" }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Counter;
