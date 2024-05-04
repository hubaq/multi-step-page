/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './SelectPlan.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../Context/FormContext'; // Import the FormContext
import { billings } from '../../assets/assets';
import NextStepButton from '../../Components/NextButton/NextButton';
import GoBackButton from '../../Components/GoBackButton/GoBackButton';
const SelectPlan = () => {
  const [type, setType] = useState('mo');

  const navigate = useNavigate();
  const { formData, clicked, setClicked, bill, setBill, check, setCheck, active, setActive } =
    useFormContext(); // Access the form data from the context
  setActive('second');
  const handleClick = index => {
    setCheck(index);
    let newBill = billings[index];
    setBill(newBill); // Update bill with the clicked bill
    // setCheck(true); // Reset clicked
    console.log(newBill);
  };
  return (
    <>
      <div className='second-step' id='view'>
        <div className='push'>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>

          <div className='billing-container' id='billing1'>
            {billings.map((bills, i) => {
              return (
                <div
                  className={`billing ${check === i ? 'addIt' : ''}`}
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <img src={bills.img} alt='' />
                  <h1 style={{ fontSize: '20px' }} className='h1'>
                    {bills.type}
                  </h1>
                  <p id='p1' className='pp'>
                    ${clicked === true ? bills.pri : bills.desc}/{clicked === true ? 'yr' : 'mo'}
                  </p>
                  {clicked ? (
                    <h2 className='bill-year' id='bill-year3'>
                      2 months free
                    </h2>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>

          <div className='clicking'>
            <h1 style={{ fontSize: 'small' }} className={`${clicked ? 'month' : 'monthly'}`}>
              Monthly
            </h1>
            <label htmlFor='toggle' id='toggleLabel'>
              <div
                onClick={() => setClicked(prev => !prev)}
                className={`label ${clicked ? 'go' : ''}`}
              ></div>
            </label>
            <h1 style={{ fontSize: 'small' }} className={`${clicked ? 'monthly' : 'month'}`}>
              Yearly
            </h1>
          </div>
        </div>
        <div className='buttons'>
          <GoBackButton path='/' />
          <NextStepButton path={check !== -1 ? '/pick' : ''} type='Next Step' />
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
