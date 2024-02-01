import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
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
    // fetch("http://192.168.31.118:8000/api/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({
    //     email: "employee2@gmail.com",
    //     password: "employee123",
    //     user_type: "EMPLOYEE",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     console.log("response", response);
    //   });
    try {
      // Thực hiện yêu cầu API
      // Xử lý dữ liệu từ API nếu cần
      //   // Sau khi API thành công, chuyển hướng đến trang admin hoặc employee
      //   if (/ Kiểm tra điều kiện để xác định loại người dùng /) {
      //     navigate("/admin");
      //   } else {
      //     navigate("/employee");
      //   }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <Button
      variant="contained"
      style={{
        width: "100%",
        padding: "10px 15px",
        background: "#279142",
        margin: "20px",
      }}
      onClick={handleApiCall}
    >
      Đăng nhập
    </Button>
  );
};

export default LoginButton;
