import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import UsernameInput from "../../components/Login/Username";
import backgroundImage from "../../assets/img/bg.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/400.css";
import MuiLink from "@mui/material/Link";

const Login = () => {
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
        color: "#0b0b45",
        fontSize: "30px",
        textAlign: "center",
        borderStyle: "solid",
        borderColor: "#808080",
        borderWidth: "2px",
      }}
    >
      <form
        style={{
          backgroundColor: "#404040",
          height: "650px",
          Width: "750px",

          margin: "20px",
          padding: "50px",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // width: "100%",
            // height: "26px",
            color: "white",
            fontSize: "5px",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Đăng nhập
          </Typography>
        </Box>
        <UsernameInput />
        <Box
          component="form"
          sx={{
            display: "flex",
            background: "#888888",
            width: "100%",
            margin: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Nhập mật khẩu"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Box>

        <MuiLink
          component={Link}
          to="/forgot-password"
          sx={{
            fontSize: "20px",
            marginLeft: "300px",
          }}
        >
          Quên mật khẩu
        </MuiLink>

        <Button
          variant="contained"
          style={{
            width: "100%",
            padding: "10px 15px",
            background: "#279142",
            margin: "20px",
          }}
        >
          Đăng nhập
        </Button>
      </form>
    </Container>
  );
};

export default Login;
