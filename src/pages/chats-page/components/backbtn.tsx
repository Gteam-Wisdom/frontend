import React from 'react';
import icon from './Vector.svg';

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button onClick={goBack}>
      <img src={icon} alt=''/>
    </button>
  );
};

export default BackButton;
