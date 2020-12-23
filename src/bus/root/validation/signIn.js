import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Should be valid email')
    .required('Should not be empty'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .required('Should not be empty'),
})
