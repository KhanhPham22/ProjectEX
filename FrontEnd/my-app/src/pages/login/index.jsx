import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import UsernameInput from "../../components/Login/userName";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/img/bg.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto/400.css";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/img/Frame.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onSubmitform = (data) => {
    console.log(data);
  };
  // const FormValues = {
  //   username: '',
  //   password: '',
  //   email: ''

  // };
  const navigate = useNavigate();

  const handleApiCall = () => {
    axios
      .post(
        "http://192.168.31.118:8000/api/login/",
        {
          email: "employee2@gmail.com",
          password: "employee123",
          user_type: "EMPLOYEE",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
    try {
      // Thực hiện yêu cầu API
      // Xử lý dữ liệu từ API nếu cần
      //   // Sau khi API thành công, chuyển hướng đến trang admin hoặc employee
      if (/ Kiểm tra điều kiện để xác định loại người dùng /) {
        navigate("/employee");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

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
        color: "#0b0b45",
        borderStyle: "solid",
        borderColor: "#808080",
        borderWidth: "2px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#404040",
          width: "450px",
          margin: "20px",
          borderRadius: "30px",
          padding: "0 20px",
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmitform)}>
          <Typography
            mt={6}
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#EDEDF2",
              textAlign: "center",
            }}
          >
            Đăng nhập
          </Typography>
          <Stack spacing={2} direction="column" alignItems={"center"}>
            {/* Logo */}
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "100px",
                height: "83px",
                margin: "60px 0px",
                // position: "absolute",
                // top: "10px", // Adjust as needed
              }}
            />

            <TextField
              id="outlined-basic"
              label="Nhập email"
              variant="outlined"
              required="Email is required"
              {...register("email")}
              style={{ width: "320px", height: "50px" }}
            />

            <TextField
              id="outlined-basic"
              label="Nhập mật khẩu"
              variant="outlined"
              required="Password is required"
              {...register("password")}
              style={{ width: "320px", heigh: "50px" }}
            />
          </Stack>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <Link
              to="/forgot-password"
              style={{
                marginLeft: "auto",
                color: "#27AE60",
                fontSize: "14px",
              }}
            >
              Quên mật khẩu
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
            mt={"120px"}
            mb={6}
          >
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "320px",
                borderRadius: "10px",
                padding: "10px 15px",
                background: "#279142",
              }}
              onClick={handleApiCall}
            >
              Đăng nhập
            </Button>
          </Box>

          {/* <Box
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
          
        </Box> */}
          {/* <Box
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
         
        </Box> */}

          {/* <MuiLink
            component={Link}
            to="/forgot-password"
            sx={{
              fontSize: "20px",
              marginLeft: "300px",
            }}
          >
            Quên mật khẩu
          </MuiLink> */}

          {/* <LoginButton /> */}
          {/*  */}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
