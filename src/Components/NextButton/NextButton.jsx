/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
const NextStepButton = ({ path, type, active }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`next-step ${active === 'first' ? 'pull' : ''} ${
        type === 'Next Step' ? 'isNextStep' : 'isConfirm'
      }`}
      style={{ display: 'inline' }}
      onClick={() => navigate(path, { replace: true })}
    >
      {type}
    </button>
  );
};

export default NextStepButton;
