import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsernameInput from '../../components/Login/Username';
import backgroundImage from '../../assets/img/bg.jpg';
import { Link } from 'react-router-dom'; // Import thư viện React Router

const Login = () => {
  return (
    <div className='container'
      style={{
              //  width: '550px',
              // height: '550px',
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
      <form className='wrapper'
       style={{
                color: '#0b0b45',
                fontsize: '30px',
                textalign: 'center',
                
            }}>

        <h1 className='text-center mb-4'
        style={{
          display: 'inline-flex',
        justifycontent: 'center',
        alignitems: 'center',
        gap: '10px',
        }}
        >Hệ thống chấm công</h1>

        
        <div>
           {/* component usernameinput */}
        <UsernameInput />
        </div>
       
{/* <div className="input-box mb-3 position-relative" >
        <input
          type="text"
          className={`form-control ${this.state.isValid ? 'is-valid' : 'is-invalid'}`}
          placeholder="Nhập tài khoản"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
          style={{
            width: '320px',
            height: '50px',
            flexShrink: '0',
            borderRadius: '10px',
            border: '1px solid #888',
            background: '#FFF',
            paddingRight: '40px', // Adjusted to accommodate the icon
          }}
        />
        <FaUser
          className="icon"
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '16px',
          }}
        />

</div> */}
        <div className="input-box mb-3 position-relative" >
          <input
            type="password"
            className="form-control"
            placeholder='Nhập mật khẩu'
            required
            style={{
              width: '320px',
              height: '50px',
              flexshrink: '0',
              borderradius: '10px',
              border: '1px solid #DADADA',
              background: '#DADADA',
          }}
          />
          <FaLock className="icon" 
           style={{
            position: 'absolute',
            right:'25px' ,
            top:'50%',
            transform: 'translateY(-50%)',
            fontsize: '16px',
          }}
          />
        </div>


         <div className="mb-3">
          <Link to="/forgot-password">Quên mật khẩu</Link>
        </div> 

        <button type="submit" className="btn btn-primary btn-lg"
           style ={{
            display: 'flex',
          width: '320px',
          height: '50px',
          padding: '10px 15px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexshrink: '0',
         
          borderradius: '15px',
          background: '#279142',
          textAlign: 'center',

        /* shadow */
          boxshadow: '0px 4px 10px 0px rgba(73, 73, 73, 0.25)',
           }}
        >Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
