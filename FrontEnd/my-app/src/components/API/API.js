// API.js

// Hàm gọi API đặt lại mật khẩu
export const resetPasswordAPI = async (email) => {
    try {
      const response = await fetch('URL_API/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data; // Trả về dữ liệu từ API nếu cần
      } else {
        throw new Error('Reset password request failed');
      }
    } catch (error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
  };
  
  // Các hàm gọi API khác có thể được thêm vào đây
  