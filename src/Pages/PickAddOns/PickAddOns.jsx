/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './PickAddOns.css';
import { picking } from '../../assets/assets';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../Context/FormContext';
import NextStepButton from '../../Components/NextButton/NextButton';
import GoBackButton from '../../Components/GoBackButton/GoBackButton';
const PickAddOns = () => {
  const {
    picked,
    setPicked,
    clicked,
    pick: peck,
    setPick,
    check,
    active,
    setActive,
  } = useFormContext();
  const navigate = useNavigate();
  setActive('third');
  const handlePick = (pickIndex, pick) => {
    if (picked.includes(pickIndex)) {
      // If already picked, unselect
      setPicked(picked.filter(item => item !== pickIndex));
      setPick(peck.filter(item => item !== pick));
    } else if (picked.length < 2) {
      // If less than 2 picked, select
      setPicked([...picked, pickIndex]);
      setPick([...peck, pick]);
    } else {
      // If 2 already picked, unselect first and select new one
      setPicked([picked[1], pickIndex]);
      setPick([peck[1], pick]);
    }
  };
  console.log(peck);
  return (
    <>
      <div className='third-step' id='view'>
        <div className='push'>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>

          {picking.map((pick, i) => (
            <div
              key={i}
              className={`online-service ${picked.includes(i) ? 'addIt' : ''}`}
              onClick={() => handlePick(i, pick)}
            >
              {picked.includes(i) && <img src={assets.checkMark} alt='' className='hidden-image' />}
              <label htmlFor='check' id='label'></label>
              <h1 className='service' style={{ fontSize: '16px' }}>
                {pick.title}
              </h1>
              <p>{pick.desc}</p>
              <span className={`add-ons${i}`}>
                ${clicked === true ? pick.pri : pick.price}/{clicked === true ? 'yr' : 'mo'}
              </span>
            </div>
          ))}
        </div>
        <div className='buttons'>
          <GoBackButton path='/select' />
          <NextStepButton path={picked.length === 0 ? '' : '/summary'} type='Next Step' />
        </div>
      </div>
    </>
  );
};

export default PickAddOns;
