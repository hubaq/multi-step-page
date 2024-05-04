/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.css';
import { useFormContext } from '../../Context/FormContext'; // Import the FormContext
const Sidebar = () => {
  const { formData, clicked, setClicked, bill, setBill, check, setCheck, active, setActive } =
    useFormContext();

  return (
    <div id='side-bar'>
      {/* <img src={assets.sideBar} alt='rrrrr' /> */}
      <div className='nav-bars'>
        <div className='step-1'>
          <span className={`step1 ${active === 'first' ? 'activee' : ''}`}>1</span>
          <h5>STEP 1</h5>
          <h4>YOUR INFO</h4>
        </div>
        <br />
        <div className='step-2'>
          <span className={`step2 ${active === 'second' ? 'activee' : ''}`}>2</span>
          <h5>STEP 2</h5>
          <h4>SELECT PLAN</h4>
        </div>
        <br />
        <div className='step-3'>
          <span className={`step3 ${active === 'third' ? 'activee' : ''}`}>3</span>
          <h5>STEP 3</h5>
          <h4>ADD-ONS</h4>
        </div>
        <br />
        <div className='step-4'>
          <span className={`step4 ${active === 'fourth' ? 'activee' : ''}`}>4</span>
          <h5>STEP 4</h5>
          <h4>SUMMARY</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
