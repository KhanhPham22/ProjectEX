import React from 'react';

const EmployeeLogin = () => {
  const handleCreateLeaveRequest = () => {
    // Placeholder for handling 'Tạo đơn xin nghỉ phép' click
    console.log("Create Leave Request clicked");
  };

  const handleViewPersonalHistory = () => {
    // Placeholder for handling 'Xem lịch sử cá nhân' click
    console.log("View Personal History clicked");
  };

  return (
    <div>
      <h2>Đăng nhập với tư cách Nhân viên</h2>
      {/* Add employee login form here */}

      <button onClick={handleCreateLeaveRequest}>Tạo đơn xin nghỉ phép</button>
      <button onClick={handleViewPersonalHistory}>Xem lịch sử cá nhân</button>
    </div>
  );
};

export default EmployeeLogin;
