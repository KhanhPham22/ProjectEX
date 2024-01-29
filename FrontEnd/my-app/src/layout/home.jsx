import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import backgroundImage from "../assets/img/bg.jpg";
import logo from "../assets/img/Logo.png";

function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#404040",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Form */}
      <Box
        component="form"
        className="wrapper"
        sx={{
          fontSize: "40px",
          textAlign: "center",
          width: "450px",
          height: "550px",
          flexShrink: 0,
          borderRadius: "30px",
          background: "#404040",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "300px",
            height: "50px",
            position: "absolute",
            top: "10px", // Adjust as needed
          }}
        />

        {/* Heading */}
        <Typography
          variant="h1"
          sx={{ fontSize: "25px", marginTop: "20px", mb: 4 }}
        >
          Bạn muốn đăng nhập với tư cách là ?
        </Typography>

        {/* Button - Nhân viên */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: "320px",
            height: "50px",
            mb: 4,
            borderRadius: "15px",
            backgroundColor: "#27AE60",
            marginTop: "150px",
          }}
          component={Link}
          to="/login"
        >
          Nhân viên
        </Button>

        {/* Button - Quản trị viên */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: "320px",
            height: "50px",
            borderRadius: "15px",
            backgroundColor: "#27AE60",
            marginTop: "0",
          }}
          component={Link}
          to="/login"
        >
          Quản trị viên
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
