import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='Welcome'>
      <p className='Welcome-title title'>¡Reserve su viaje ahora!</p>
      <p className='Welcome-description description'>Disfrute con su familia estas fiestas</p>
      <button onClick={startBooking} className='Welcome-cancel button'>Comenzar</button>
    </div>
  );
}; 