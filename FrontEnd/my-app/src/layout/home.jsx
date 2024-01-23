import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/img/bg.jpg';

function Home() {
  return (
    <div className='container'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <form className='wrapper'
        style={{
          
          fontSize: '40px',
          textAlign: 'center',
          width: '450px',
          height: '550px',
          flexshrink: 0,
          borderradius: '30px',
          background: '#404040'
        }}>

        <h1 className='text-center mb-4'
          style={{
            fontSize:'25px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}>
          Bạn muốn đăng nhập với tư cách là ?
        </h1>

        <button type="submit" className="btn btn-primary btn-lg"
          style={{
            display: 'flex',
            width: '320px',
            height: '50px',
            padding: '10px 15px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: '0',
            margin:'auto',
            
            marginBottom:'40px',
            borderRadius: '15px',
            background: '#279142',
            textAlign: 'center',
            boxShadow: '0px 0px 20px 0px rgba(250, 250, 250, 0.25)',
          }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Nhân viên
          </Link>
        </button>

        <button type="submit" className="btn btn-primary btn-lg"
          style={{
            display: 'flex',
            width: '320px',
            height: '50px',
            padding: '10px 15px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: '0',
            margin:'auto',
            marginTop:'20px',
            borderRadius: '15px',
            background: '#737373',
            textAlign: 'center',
            boxShadow: '0px 0px 20px 0px rgba(250, 250, 250, 0.25)',
          }}>
          <Link to="/login" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Quản trị viên
          </Link>
        </button>

      </form>
    </div>
  );
}

export default Home;
