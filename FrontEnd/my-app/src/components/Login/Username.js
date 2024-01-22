// import React, { useState } from 'react';

// const UsernameInput = () => {
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;

//     if (inputValue.length >= 8) {
//       if (/^[a-zA-Z0-9]+$/.test(inputValue)) {
//         setUsername(inputValue);
//         setError('');
//       } else {
//         setError('Invalid characters. Username can only contain alphanumeric characters.');
//       }
//     } else {
//       setError('Username must have a minimum length of 8 characters.');
//     }
//   };

//   // Return an object with the username and a function to update it
//   return {
//     username,
//     setUsername,
//     error,
//     handleInputChange,
//   };
// };

// export default UsernameInput;
