import React from 'react';
import { useNavigate } from 'react-router-dom'
import './AccessDenied.css'

const AccessDenied = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // This is supposed to be the main Home page.
  };

  return (
    <div className='NotFoundBox'>
      <div className='NotFoundBodyDiv'>
        <h2 className='NotFoundMessage'>- You are logged out -</h2>

        <button className='barCell loginButton' onClick={handleClick}>
          {' '}
          <span className='backButtonText'>Login</span>
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;