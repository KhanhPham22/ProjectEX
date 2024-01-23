import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

class UsernameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isValid: false,
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    const isValidUsername = this.validateUsername(inputValue);

    this.setState({
      username: inputValue,
      isValid: isValidUsername,
    });
  };

  validateUsername = (username) => {
    // Validate username based on the given conditions
    const isMinLengthValid = username.length >= 8;
    const isNumericValid = /^\d+$/.test(username); // Check if the username contains only numeric characters

    return isMinLengthValid && isNumericValid;
  };

  render() {
    return (
      <div className="input-box mb-3 position-relative" >
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
            border: '1px solid #DADADA',
            background: '#DADADA',
            // paddingRight: '40px', // Adjusted to accommodate the icon
          }}
        />
        <FaUser
          className="icon"
          style={{
            position: 'absolute',
            right: '25px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '16px',
          }}
        />
        {this.state.isValid ? (
          <div className="valid-feedback">Hợp lệ</div>
        ) : (
          <div className="invalid-feedback">
            Tài khoản phải có ít nhất 8 ký tự và chỉ chứa ký tự số.
          </div>
        )}
      </div>
    );
  }
}

export default UsernameInput;
