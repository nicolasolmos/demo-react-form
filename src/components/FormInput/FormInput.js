const FormInput = ({ register, fieldName, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input {...register(fieldName, { required: true })} />
    </label>
  );
};

export default FormInput;