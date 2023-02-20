const FormInput = ({ register, fieldName, label, type, min }) => {
  return (
    <label>
      <span>{label}</span>
      <input type={type} {...register(fieldName, { min, required: true })} />
    </label>
  );
};

FormInput.defaultProps = {
  type: 'text',
  min: undefined
};

export default FormInput;