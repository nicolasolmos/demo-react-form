import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DniForm.module.css';
import FormInput from '../FormInput/FormInput';

const DniForm = (props) => {
  const { onSubmit, register, formState: { errors } } = useForm();
  return (
    <section>
      <form>
        <div>
          <FormInput register={register} label="Last Name" fieldName="lastName" />
          <FormInput register={register} label="Name" fieldName="name" />
          <FormInput register={register} label="Last Name" fieldName="lastName" />
          <label>
            <span>Nationality</span>
            <select  {...register('nationality', { required: true })}>
              {props.nationalities.map(nationality => <option key={nationality} value={nationality}>{nationality}</option>)}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Sex</span>
            <select   {...register('sex', { required: true })} >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            <span>Birth Date</span>
            <input   {...register('birthDate', { required: true })} />
          </label>

          <label>
            <span>Document Due Date</span>
            <input   {...register('documentDueDate', { required: true })} />
          </label>
        </div>
        <div>
          <label>
            <span>Issue Date</span>
            <input   {...register('issueDate', { required: true })} />
          </label>

          <label>
            <span>Expedient Number</span>
            <input   {...register('expedientNumber', { required: true })} />

          </label>

          <label>
            <span>Office Id</span>
            <input   {...register('officeId', { required: true })} />
          </label>
        </div>
        <div>
          <label>
            <span>Document Number</span>
            <input   {...register('documentNumber', { required: true })} />
          </label>
          <label>
            <span>Birth Place</span>
            <input   {...register('birthPlace', { required: true })} />
          </label>
          <label>
            <span>Address</span>
            <input   {...register('address', { required: true })} />
          </label>
        </div>
        <div>
          <label>
            <span>CUIL</span>
            <input   {...register('cuil', { pattern: /\d{2}-\d{1,9}-\d{1}/, required: true })} />
          </label>
        </div>
      </form>
    </section>
  );

}


export default DniForm;