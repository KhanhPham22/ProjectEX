import React, { useState } from 'react';
// import { resetPasswordAPI } from '../../components/API/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../../assets/img/bg.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kiểm tra xác nhận mật khẩu
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }

      // Gọi hàm từ file API để đặt lại mật khẩu
      // const data = await resetPasswordAPI(email, password);

      // Nếu thành công, đánh dấu là đã gửi thành công
      setIsSubmitted(true);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error.message);
    }
  };

  return (
    <div className="container"
    style={{
    //   width: '550px',
    //  height: '550px',
     flexshrink: '0',
     backgroundImage: `url(${backgroundImage})`, // Sử dụng biến đã import
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     width: '100vw', // Bọc toàn bộ chiều rộng của trình duyệt
    height: '100vh', // Bọc toàn bộ chiều cao của trình duyệt
     display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   
   }}>
    
    <h2 style={{ color: 'blue', fontSize: '35px', marginBottom: ' 335px  ', padding:' 50px ', textAlign: 'center' }}>Đặt lại mật khẩu</h2>
      {isSubmitted ? (
        <p>An email has been sent with instructions to reset your password.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
        <label style={{ marginBottom: '10px', display: 'block' }}>Email:</label>
        <input
             type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            required
          style={{
                  padding: '10px',
                  fontSize: '14px',
                  width: '100%',
                  boxSizing: 'border-box',
                 
    }}
  />
</div>

  <div>
      <label style={{ marginBottom: '10px', display: 'block' }}>New Password:</label>
      <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          style={{
                 padding: '10px',
                fontSize: '14px',
                width: '100%',
                boxSizing: 'border-box',
    }}
  />
</div>


    <div>
        <label style={{ marginBottom: '10px', display: 'block' }}>Confirm Password:</label>
        <input
            type="password"
           value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        style={{
            padding: '10px',
           fontSize: '14px',
           width: '100%',
           boxSizing: 'border-box',
    }}
  />
</div>


<div>
  <button
    type="submit"
    style={{
      backgroundColor: '#4CAF50', /* Màu nền */
      color: 'white', /* Màu chữ */
      padding: '10px 15px', /* Kích thước đệm */
      fontSize: '14px', /* Kích thước chữ */
      border: 'none', /* Không có đường viền */
      borderRadius: '5px', /* Góc bo tròn */
      cursor: 'pointer', /* Con trỏ khi di chuột vào nút */
      marginTop:'20px',
    }}
  >
    Reset Password
  </button>
</div>

        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
