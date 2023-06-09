/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useRouter, useParams } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import { useQueryFetchById } from '../../../hooks/useFetch';
import { BASE_URL } from '../../../urls/urls';

function page() {

    const router = useRouter();

    const { id } = useParams()

    const data = useQueryFetchById('categories', id)

    const finalData = data.fetchedData

    console.log("finalData", finalData?.category_id);


    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };


    const formik = useFormik({

        initialValues: {
            category_id: finalData?.category_id,
            name: finalData?.name,
            description: finalData?.description,

        },

        //validationSchema: SignUpSchema

        onSubmit: values => {

            axios.patch(`sub-categories/${finalData?.id}`, {

                category_id: values.category_id,
                name: values.name,
                description: values.description,

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

        //validationSchema: SignUpSchema
        enableReinitialize: true

    });

    const formItems = [
        {
            textFieldName: 'category_id',
            id: 'category_id',
            name: 'category_id',
            type: "number",
            value: formik.values.category_id,
            touched: formik.touched.category_id,
            errors: formik.errors.category_id

        },
        {
            textFieldName: 'name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name
        },
        {
            textFieldName: 'description',
            id: 'description',
            name: 'description',
            type: "string",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description
        },

    ]


    return (

        <Grid container justifyContent="center">

            <Grid container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
                sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                <form onSubmit={formik.handleSubmit}>

                    {

                        formItems.map((data, index) =>

                            <Grid container key={index} my={3}>

                                <Grid alignItems="center" width={200} display="flex"  >

                                    <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                    <Typography variant='h6' fontWeight="550">:</Typography>

                                </Grid>

                                <Grid bgcolor="">

                                    <TextField sx={{ width: 400 }}
                                        //variant="standard"
                                        //label={data.textFieldName}
                                        id={data.id}
                                        name={data.name}
                                        type={data.type}
                                        onChange={formik.handleChange}
                                        value={data.value}
                                        error={data.touched && Boolean(data.errors)}
                                        helperText={data.touched && data.errors}
                                        onBlur={formik.handleBlur}
                                    />

                                </Grid>

                            </Grid>

                        )

                    }



                    <Grid container justifyContent="flex-end">

                        <Button type="submit" sx={{
                            bgcolor: '#5dbea3',
                            mb: 2,
                            "&:hover": {
                                backgroundColor: 'rgb(7, 177, 77, 0.42)'
                            }
                        }}>

                            <Typography sx={{
                                px: 1.5, py: 1,
                                cursor: 'pointer',
                                color: 'black',
                            }}>UPDATE</Typography>

                        </Button>

                    </Grid>


                </form>

            </Grid>

        </Grid>

    )
}

export default page