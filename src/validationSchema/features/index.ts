import * as yup from 'yup';

export const featureValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  product_id: yup.string().nullable(),
  team_member_id: yup.string().nullable(),
});
