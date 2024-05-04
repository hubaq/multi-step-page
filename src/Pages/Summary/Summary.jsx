/* eslint-disable no-unused-vars */
import React from 'react';
import './Summary.css';
import { useFormContext } from '../../Context/FormContext'; // Import the FormContext
import { useNavigate } from 'react-router-dom';
import NextStepButton from '../../Components/NextButton/NextButton';
import GoBackButton from '../../Components/GoBackButton/GoBackButton';

const Summary = () => {
  const { bill, clicked, picked, pick: peck, check, active, setActive } = useFormContext();
  setActive('fourth');
  const navigate = useNavigate();
  return (
    <>
      <div className='fourth-step' id='view'>
        <div className='push'>
          <h1>Finishing up</h1>
          <p>Double-check everything looks okay before confirming.</p>
          <div className='finishing-up-div'>
            <h1 style={{ fontSize: '20px' }} id='plan'>
              {bill.type}
            </h1>
            <h1 className='cost' style={{ fontSize: '18px' }}>
              ${check !== -1 ? `${clicked === true ? bill.pri : bill.desc}` : 0}/
              {clicked ? 'yr' : 'mo'}
            </h1>
            <p
              onClick={() => picked.length === 0 || navigate('/select', { replace: true })}
              className='underline'
              style={{ marginTop: '-12px', marginBottom: '30px' }}
            >
              Change
            </p>
            <hr />
            {peck.map((pick, i) => (
              <div key={i} className='div'>
                <p className='pp1'>{pick.title}</p>
                <p className='cost2' style={{ color: 'var(--marine-blue)', fontWeight: 'light' }}>
                  +${clicked === true ? pick.pri : pick.price}/{clicked ? 'yr' : 'mo'}
                </p>
              </div>
            ))}
          </div>
          <div className='finish'>
            <p>Total (per month)</p>
            <p
              className='cost4'
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bolder',
                color: 'var(--purplish-blue)',
              }}
            >
              +$
              {picked.length === 0
                ? 0
                : peck.reduce(
                    (acc, curr) => acc + Number(`${clicked === true ? curr.pri : curr.price}`),
                    0,
                  ) + Number(`${clicked === true ? bill.pri : bill.desc}`)}
              /{clicked ? 'yr' : 'mo'}
            </p>
          </div>
        </div>

        <div className='buttons' style={{ width: '80%' }}>
          <GoBackButton path='/pick' />
          <NextStepButton path='/last' type='Confirm' />
        </div>
      </div>
    </>
  );
};

export default Summary;
