import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UsernameInput = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        background: "#888888",
        width: "100%",
        // padding: "10px 15px",
        margin: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Nhập email"
        variant="outlined"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default UsernameInput;
