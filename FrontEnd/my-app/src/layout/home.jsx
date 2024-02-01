import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import backgroundImage from "../assets/img/newbg.jpg";
import Logo from "../assets/img/Logo.png";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import Face4Icon from "@mui/icons-material/Face4";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "10px",
        backgroundColor: "#404040",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        sx={{
          width: "450px",
          margin: "auto", // Combine the duplicate margin property
          borderRadius: "30px",
          padding: "0 20px",
        }}
      >
        <Box pt={10} textAlign={"center"}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "270px",
              height: "43px", // Add height property
              color: "#FFFFFF",
              // marginTop: "91px",
              // marginLeft: "45px",
            }}
          />
        </Box>
        <form>
          <Stack
            spacing={2}
            direction="column"
            alignItems={"center"}
            justifyContent={"flex-end"}
            sx={{
              height: "calc(100vh - 170px)",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#C6C6C6",
                textAlign: "center",
              }}
            >
              Bạn muốn đăng nhập với tư cách là ?
            </Typography>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                sx={{
                  width: "320px",
                }}
                variant="contained"
                startIcon={<FaceIcon />}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Nhân viên
              </Button>
            </Box>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                sx={{
                  width: "320px",
                }}
                variant="outlined"
                startIcon={<Face4Icon />}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Quản trị viên
              </Button>
              {/* <Link to="/login"></Link> */}
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Home;
