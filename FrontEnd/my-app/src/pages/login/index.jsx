import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  return (
    <div className='container'>
      <form className="mt-5">
        <h1 className="mb-4">Hệ thống chấm công</h1>

        <div className="mb-3 input-group">
          <span className="input-group-text"><FaUser /></span>
          <input type="text" className="form-control" placeholder='Username' required />
        </div>

        <div className="mb-3 input-group">
          <span className="input-group-text"><FaLock /></span>
          <input type="password" className="form-control" placeholder='Password' required />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
