import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

 const Login = () => {
  const validate = Yup.object({

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    // password: Yup.string()
    //   .min(6, 'Password must be at least 6 charaters')
    //   .required('Password is required'),
   
  })
  return (
    <Formik
      initialValues={{
         
        email: '',
        password: '',
     
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
          

            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
           
            <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>login</button>
            {/* <button className="btn btn-danger mt-3 " type="reset">Reset</button> */}
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Login
