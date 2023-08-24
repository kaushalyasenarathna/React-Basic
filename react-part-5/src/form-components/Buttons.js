import React from 'react';

const Button = ({ className, type, onClick, name }) => {
  return (
    <div className='mb-3'>

      <button className={className} type={type} onClick={onClick}>{name}</button>
      
    </div>
  );
};

export default Button;
