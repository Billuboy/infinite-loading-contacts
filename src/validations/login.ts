import * as Yup from 'yup';

export default Yup.object({
  username: Yup.string()
    .min(3, 'Username should be 3-40 characters long')
    .max(40, 'Username should be 3-40 characters long')
    .required('This field is requried'),
  password: Yup.string()
    .min(3, 'Username should be 3-30 characters long')
    .max(30, 'Username should be 3-30 characters long')
    .required('This field is requried'),
});
