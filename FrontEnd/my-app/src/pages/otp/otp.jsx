import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import backgroundImage from "../../assets/img/bg.jpg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/500.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Otp() {
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
              {" "}
              {/* Đặt đường dẫn tương ứng với trang bạn muốn quay lại */}
              <IconButton sx={{ fontSize: 40, color: "white" }}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Box sx={{ width: "100%", color: "white", fontSize: "20px" }}>
              <Typography variant="h2" gutterBottom>
                Nhập mã otp
              </Typography>
              <Typography variant="h3" gutterBottom>
                Nhập vào 6 chữ số được gửi tới email của bạn
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
            margin: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Nhập tài khoản"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </Box>

        <Button
          variant="contained"
          style={{
            width: "100%",
            padding: "10px 15px",
            background: "#279142",
            marginTop: "10px",
            margin: "20px",
          }}
        >
          Xác nhận
        </Button>
      </form>
    </Container>
  );
}

export default Otp;
