/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../Context/FormContext';
import NextStepButton from '../../Components/NextButton/NextButton';

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState();
  const navigate = useNavigate();

  const {
    formData,
    updateFormData,
    clicked,
    setClicked,
    bill,
    setBill,
    check,
    setCheck,
    active,
    setActive,
  } = useFormContext();
  setActive('first');

  const handleChange = e => {
    const { name, value } = e.target;
    console.log('Name:', name, 'Value:', value);
    updateFormData(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true);

    if (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.number.trim() !== ''
    ) {
      console.log('Form submitted');
      setFormSubmitted(false);
      navigate('/select', { replace: true });
    }
  };

  return (
    <>
      <div className='first-step' id='view' style={{ display: 'inline-block' }}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form onSubmit={handleSubmit}>
          <div className='push'>
            <div className='labelling'>
              <label htmlFor='name'>Name</label>
              {formSubmitted && formData.name.trim() === '' && (
                <p className='red'>This field is required</p>
              )}
            </div>
            <br />
            <input
              type='text'
              name='name'
              id='name'
              placeholder='e.g. Stephen King'
              className={`input ${formSubmitted && formData.name.trim() === '' && 'redded'}`}
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <div className='labelling'>
              <label htmlFor='email'>Email Address</label>
              {formSubmitted && formData.email.trim() === '' && (
                <p className='red'>This field is required</p>
              )}
            </div>
            <br />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='e.g. stephenking@lorem.com'
              className={`input ${formSubmitted && formData.email.trim() === '' && 'redded'}`}
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <div className='labelling'>
              <label htmlFor='number'>Phone Number</label>
              {formSubmitted && formData.number.trim() === '' && (
                <p className='red'>This field is required</p>
              )}
            </div>
            <br />
            <input
              type='tel'
              name='number'
              id='number'
              placeholder='e.g. +1 234 567 890'
              className={`input ${formSubmitted && formData.number.trim() === '' && 'redded'}`}
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className='buttons'>
            <NextStepButton
              path={
                formSubmitted &&
                formData.name !== '' &&
                formData.email !== '' &&
                formData.number !== ''
                  ? '/select'
                  : ''
              }
              type='Next Step'
              active={active}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
