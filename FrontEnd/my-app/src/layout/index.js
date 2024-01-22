import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../../assets/img/bg.jpg';

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
          color: '#0b0b45',
          fontSize: '30px',
          textAlign: 'center',
        }}>

        <h1 className='text-center mb-4'
          style={{
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
            borderRadius: '15px',
            background: '#279142',
            textAlign: 'center',
            boxShadow: '0px 4px 10px 0px rgba(73, 73, 73, 0.25)',
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
            borderRadius: '15px',
            background: '#279142',
            textAlign: 'center',
            boxShadow: '0px 4px 10px 0px rgba(73, 73, 73, 0.25)',
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
