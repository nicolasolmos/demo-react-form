import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../Inputs/FormInput/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import DniSchema from './schema';
import FormSelect from '../Inputs/FormSelect/FormSelect';

import './DniForm.css';

const DniForm = (props) => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(DniSchema)
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = data => props.onSuccess(data);

  return (
    <section className="dni-form-page">
      <section className="dni-form-container">
        <header className="title-container">
          <h2>Personal Data</h2>
          <p>Fill the form with your personal data: </p>
        </header>
      <form className="dni-form" onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group'>
          <FormInput register={register} label="Last Name" fieldName="lastName" errors={errors.lastName} />
          <FormInput register={register} label="Name" fieldName="name" errors={errors.name} />
          <FormSelect
            register={register}
            options={props.nationalities}
            label="Nationality"
            fieldName="nationality"
          />
        </div>
        <div className='input-group'>
          <FormSelect
            register={register}
            options={['Male', 'Female']}
            label="Sex"
            fieldName="sex"
          />
          <FormInput type="date" register={register} label="Birth Date" fieldName="birthDate" />
          <FormInput type="date" register={register} label="Document Due Date" fieldName="documentDueDate" />
        </div>
        <div className='input-group'>
          <FormInput type="date" register={register} label="Issue Date" fieldName="issueDate" />
          <FormInput type="number" register={register} min={1} label="Expedient Number" fieldName="expedientNumber" />
          <FormInput type="number" register={register} min={1} label="Office Id" fieldName="officeId" />
        </div>
        <div className='input-group'>
          <FormInput type="number" register={register} min={1} label="Document Number" fieldName="documentNumber" />
          <FormInput register={register} label="Birth Place" fieldName="birthPlace" />
          <FormInput register={register} label="Address" fieldName="address" />
        </div>
        <div className='input-group'>
          <FormInput register={register} min={1} label="CUIL" fieldName="cuil" />
        </div>
        <div className="submit-button-container">
          <input className="submit-button" type='submit' />
        </div>
      </form>
    </section>
    </section>
  );

}


export default DniForm;