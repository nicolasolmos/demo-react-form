import '../common-styles.css';
import FormElementErrorMessage from '../../FormElementErrorMessage/FormElementErrorMessage';
import classNames from 'classnames';

const FormInput = ({ register, fieldName, label, type, min, error }) => {
  const inputClasses = classNames('form-input-input', 
    {'form-input-input--error': error.message}
  );

  return (
    <label className="form-input-container">
      <span className="form-input-label">{label}</span>
      <input className={inputClasses} type={type} {...register(fieldName, { min, required: true })} />
      <FormElementErrorMessage message={error.message} />
    </label>
  );
};

FormInput.defaultProps = {
  type: 'text',
  min: undefined,
  error: {}
};

export default FormInput;