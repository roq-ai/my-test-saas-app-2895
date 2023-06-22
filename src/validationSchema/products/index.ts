import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
  product_manager_id: yup.string().nullable(),
});
