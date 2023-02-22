import React from 'react';
import './FormElementErrorMessage.css';

const FormElementErrorMessage = (props) => {
  if (!props.message) return null;

  return <i className='form-element-error-message'>
    {props.message}
  </i>;

};

export default FormElementErrorMessage;