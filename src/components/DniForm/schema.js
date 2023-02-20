import * as yup from 'yup';

const dniSchema = yup.object({
  lastName: yup.string().required(),
  name: yup.string().required(),
  nationality: yup.string().required(),
  sex: yup.string().required(),
  birthDate: yup.date().required(),
  birthPlace: yup.string().required(),
  documentNumber: yup.number().required().integer().positive(),
  issueDate: yup.date().required(),
  documentDueDate: yup.date().required(),
  expedientNumber: yup.number().required().integer().positive(),
  officeId: yup.number().required().integer().positive(),
  address: yup.string().required(),
  cuil: yup.number().required().integer().positive(),
});

export default dniSchema;