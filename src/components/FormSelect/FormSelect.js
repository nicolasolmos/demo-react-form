const FormSelect = ({ register, fieldName, label, options }) => {
  return (
    <label>
      <span>{label}</span>
      <select  {...register(fieldName, { required: true })}>
              {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
    </label>
  );
};

export default FormSelect;