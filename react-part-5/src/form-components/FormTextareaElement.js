import React from 'react';

const FormTextareaElement = ({ label, type, onChange, placeholder, name, value }) => {
  return (
    <div className='mb-3'>
      {label && <label className="text-info font-weight-bold">{label}</label>}
      <textarea className='form-control' name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}

export default FormTextareaElement;
