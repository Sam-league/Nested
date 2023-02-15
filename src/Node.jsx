import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";

function Node({ data, setSelected, setHover }) {
  const change = (value) => {
    setSelected(value);
    console.log(value);
  };
  return (
    <Box
      sx={{
        transform: "translateX(95%)",
        width: 200,
        backgroundColor: "#f1f1f1",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {data?.map((v) => (
        <Box
          sx={{ padding: 1, border: "1px solid black" }}
          fullWidth
          onClick={() => change(v.label)}
        >
          {v.label}
          {v.child.length > 0 && <Node data={v} setSelected={setSelected} />}
        </Box>
      ))}
    </Box>
  );
}

export default Node;
