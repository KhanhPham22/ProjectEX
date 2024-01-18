import React from 'react';

const AdminLogin = () => {
  // Define the handleFeatureClick function
  const handleFeatureClick = (feature) => {
    // Implement the logic for each feature click here
    console.log(`Clicked on feature: ${feature}`);
  };

  return (
    <div>
      <h2>Đăng nhập với tư cách Admin</h2>
      {/* Add admin login form here */}

      <div>
        <h3>Tính năng:</h3>
        <button onClick={() => handleFeatureClick('Quản lý tài khoản nhân viên')}>
          Quản lý tài khoản nhân viên
        </button>
        <button onClick={() => handleFeatureClick('Quản lý yêu cầu nghỉ phép')}>
          Quản lý yêu cầu nghỉ phép
        </button>
        <button onClick={() => handleFeatureClick('Xem tổng quan yêu cầu nghỉ phép')}>
          Xem tổng quan yêu cầu nghỉ phép
        </button>
        <button onClick={() => handleFeatureClick('Chấm công')}>
          Chấm công
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
