/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// FormContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', email: '', number: '' });
  const [clicked, setClicked] = useState(false);
  const [bill, setBill] = useState({});
  const [check, setCheck] = useState(-1);
  const [pick, setPick] = useState([]);
  const [picked, setPicked] = useState([]);
  const [active, setActive] = useState();

  // useEffect(() => {
  //   console.log(bill);
  // }, [bill]); // Log the bill state whenever it changes

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        clicked,
        setClicked,
        bill,
        setBill,
        check,
        setCheck,
        pick,
        setPick,
        picked,
        setPicked,
        active,
        setActive,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
