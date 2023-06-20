"use client"
import { Grid, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../urls/urls';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import { logInSchema } from './validation';


function page() {
  const formik = useFormik({

    initialValues: {

      username: '',
      password: '',

    },

    //validationSchema: logInSchema,

    onSubmit: values => {

      axios.post(`${BASE_URL}auth/login`, {

        username: values.username,
        password: values.password,

      }).then((res) => {

        Cookies.set('auth_token', res.data.accessTocken)

        console.log('/////////////////', res.data.accessTocken);

      })

    },
  });

  const formItems = [
    {
      textFieldName: 'USER NAME',
      id: 'username',
      name: 'username',
      type: "text",
      value: formik.values.username,
      touched: formik.touched.username,
      errors: formik.errors.username

    },
    {
      textFieldName: 'password',
      id: 'password',
      name: 'password',
      type: "password",
      value: formik.values.password,
      touched: formik.touched.password,
      errors: formik.errors.password
    }

  ]


  return (

    <Grid>

      <form onSubmit={formik.handleSubmit}>

        {

          formItems.map((data, index) =>

            <Grid key={index}>

              <label >{data.textFieldName}</label>

              <TextField
                id={data.id}
                name={data.name}
                type={data.type}
                onChange={formik.handleChange}
                ///value={data.value}
                value={data.value}
                error={data.touched && Boolean(data.errors)}
                helperText={data.touched && data.errors}
              />

            </Grid>

          )

        }

        <button type="submit">Submit</button>

      </form>

    </Grid>

  )
}

export default page