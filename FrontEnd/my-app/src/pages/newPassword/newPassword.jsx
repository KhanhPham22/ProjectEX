import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import backgroundImage from "../../assets/img/bg.jpg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

const NewPassword = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#0b0b45",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "#404040",
          height: "650px",
          width: "650px",
          padding: "50px",
          borderRadius: "30px",
          margin: "auto",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link to="/login">
              <ArrowBackIcon sx={{ fontSize: 40, color: "white" }} />
            </Link>
          </Grid>
          <Grid item>
            <Box sx={{ width: "100%", color: "white", fontSize: "20px" }}>
              <Typography variant="h2" gutterBottom>
                Nhập mật khẩu mới
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          component="form"
          sx={{
            display: "flex",
            background: "#888888",
            width: "100%",
            margin: "auto",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Nhập mật khẩu mới"
            variant="outlined"
            type="password"
            style={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            background: "#888888",
            width: "100%",
            margin: "auto",
            marginTop: "5px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Xác nhận mật khẩu mới"
            variant="outlined"
            type="password"
            style={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon sx={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Link to="/login">
          <Button
            variant="contained"
            style={{
              width: "100%",
              padding: "10px",
              background: "#279142",
              marginTop: "70px",
              margin: "auto",
            }}
          >
            Xong
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default NewPassword;
