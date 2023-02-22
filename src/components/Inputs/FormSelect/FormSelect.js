import '../common-styles.css';

const FormSelect = ({ register, fieldName, label, options }) => {
  return (
    <label className='form-select-container'>
      <span className='form-select-label'>{label}</span>
      <select  className='form-select-select' {...register(fieldName, { required: true })}>
              {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
    </label>
  );
};

export default FormSelect;