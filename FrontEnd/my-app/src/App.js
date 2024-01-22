import Login from "./pages/login";
import "./App.css";
import React from "react";
import ForgotPassword from './pages/forgot-password/forgot-password';
import Admin from "./pages/admin/admin";
import Employee from "./pages/employee/employee";
import Notfound from "./pages/404/404";
import Application from "./pages/Application/appli";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Sử dụng <Routes> để bọc tất cả các <Route> */}
        <Routes>
          {/* Route cho trang đăng nhập */}
          <Route path="/login" element={<Login />} />

          {/* Route cho trang quên mật khẩu */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

         <Route path="/admin" element={<Admin/>} />

         <Route path="/employee" element ={<Employee/>} />
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="/404" element ={<Notfound/>} />

          <Route path="/appli" element={<Application/>} />
          {/* Hoặc bạn có thể đặt một trang 404 ở đây nếu không khớp với bất kỳ route nào */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
