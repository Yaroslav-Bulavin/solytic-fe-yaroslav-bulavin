import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object().shape({
  username: Yup.string().email().required(),
  password: Yup.string().min(6).max(20).required(),
});
