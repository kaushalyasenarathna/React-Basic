import React from 'react';

const FormInputElement = ({ label, type, onChange, placeholder, name, value }) => {
  return (
    <div className='mb-3'>
      {label && <label className="text-info font-weight-bold mb-3">{label}</label>}
      <input className='form-control' name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}

FormInputElement.defaultProps = {
  type: "text"
}

export default FormInputElement;
