import '../common-styles.css';

const FormInput = ({ register, fieldName, label, type, min }) => {
  return (
    <label className="form-input-container">
      <span className="form-input-label">{label}</span>
      <input className="form-input-input" type={type} {...register(fieldName, { min, required: true })} />
    </label>
  );
};

FormInput.defaultProps = {
  type: 'text',
  min: undefined
};

export default FormInput;