import React from 'react';
import { Link } from 'react-router-dom';


function Notfound() {
  return (
    <div>
      <h2>404 not found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to home</Link>
    
    </div>
  );
}

export default Notfound;