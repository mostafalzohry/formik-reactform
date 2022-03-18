import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

 const Register = () => {
  const validate = Yup.object({
      userName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(5, 'must be more than 5')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
             userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
           <TextField label="User Name" name="userName" type="text" />

            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>Register</button>
            <button className="btn btn-danger mt-3 " type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Register
