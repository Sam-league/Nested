import React, { useState } from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import Node from "./Node";

const App = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [selected, setSelected] = useState("Select");
  const [hover, setHover] = useState(false);
  let count = 0;

  const add = () => {
    if (selected == "Select") {
      setArr([...arr, { id: count, label: value, child: [] }]);
      setValue("");
      count++;
    } else {
      let clone = [...arr];
      let index = clone.findIndex((v) => v.label == selected);
      clone[index].child.push({ label: value, child: [] });
      setValue("");
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
          position: "relative",
        }}
      >
        <Typography>Select</Typography>
        <Box
          sx={{
            width: 200,
            backgroundColor: "#f1f1f1",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 5,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Typography>{selected}</Typography>
          {hover && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ padding: 1, border: "1px solid black" }}
                fullWidth
                onClick={() => setSelected("Select")}
              >
                None
              </Box>
              {arr.map((v) => (
                <Box
                  sx={{ padding: 1, border: "1px solid black" }}
                  fullWidth
                  onClick={() => setSelected(v.label)}
                >
                  {v.label}
                  {v.child.length > 0 && (
                    <Node
                      data={v.child}
                      setHover={setHover}
                      setSelected={setSelected}
                    />
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography>Category</Typography>
        <TextField value={value} onChange={(e) => setValue(e.target.value)} />
      </Box>
      <Button onClick={add} variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default App;
