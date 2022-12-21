import React from 'react';
import './Nav.css';

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send('CANCEL')
  }
  const goBack = () => {
    send('BACK')
  }

  return (
    <nav className='Nav'>
      <h1 className='Nav-logo'>American Airlines ✈</h1>
      {!state.matches('initial') && !state.matches('tickets') &&
        <button onClick={goBack} className='Welcome-back button'>Atrás</button>
      }
      {!state.matches('initial') && !state.matches('tickets') &&
        <button onClick={goToWelcome} className='Nav-cancel button-secondary'>Cancelar</button>
      }
    </nav>
  );
}; 