import React from 'react';

const FormElementErrorMessage = (props) => {
  if (!props.show) return null;

  return <i>
    {props.message}
  </i>;

};

export default FormElementErrorMessage;