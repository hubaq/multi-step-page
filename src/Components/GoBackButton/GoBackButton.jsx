/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path, { replace: true })}
      className='go-back'
      
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
