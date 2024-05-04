/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../../assets/assets';
import './Finishing.css';
const Finishing = () => {
  return (
    <div className='fifth-step' id='view'>
      <img src={assets.thankYou} alt='' />
      <h1>Thank you!</h1>
      <p style={{ marginLeft: '-35px', marginTop: '20px' }}>
        Thanks for confirming your subscription! We hope you have fun using our platform. if you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Finishing;
