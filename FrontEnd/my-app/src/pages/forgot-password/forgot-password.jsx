import React, { useState } from 'react';
import { resetPasswordAPI } from '../../components/API/API';

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
      const data = await resetPasswordAPI(email, password);

      // Nếu thành công, đánh dấu là đã gửi thành công
      setIsSubmitted(true);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Đặt lại mật khẩu</h2>
      {isSubmitted ? (
        <p>An email has been sent with instructions to reset your password.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit">Reset Password</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
