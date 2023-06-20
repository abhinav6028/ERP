/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Button, FormControl, Grid, TextField, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import useBearerToken from '../../../hooks/useBearerToken';
import { useQueryFetch, useQueryFetchByCode } from '../../../hooks/useFetch';
import { BASE_URL } from '../../../urls/urls';

function page() {

  const router = useRouter();

  const token = useBearerToken()

  const { id } = useParams();

  const data = useQueryFetchByCode('products', id)

  const finalData = data.fetchedData;

  //console.log("id", finalData?.id);

  // console.log("//////////////", finalData);

  const headers = {

    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',

  };

  const { fetchedData } = useQueryFetch('categories');

  const subCategories = useQueryFetch('sub-categories').fetchedData

  const [category, setCategory] = useState('');

  const selectCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const [subCategorie, setSubCategorie] = useState('');

  const selectSubCategory = (event: SelectChangeEvent) => {
    setSubCategorie(event.target.value as string);
  };

  const formik = useFormik({

    initialValues: {
      code: finalData?.code,
      name: finalData?.name,
      brand: finalData?.brand,
      description: finalData?.description,
      unit: finalData?.unit,
      category_id: finalData?.category_id,
      subcategory_id: finalData?.subcategory_id,
      tax_type: finalData?.tax_type,
      tax_amount: finalData?.tax_amount,
      remarks: finalData?.remarks
    },

    //validationSchema: SignUpSchema

    onSubmit: values => {

      axios.patch(`${BASE_URL}products/${finalData?.id}`, {

        code: values.code,
        name: values.name,
        brand: values.brand,
        description: values.description,
        unit: values.unit,
        category_id: category,
        subcategory_id: subCategorie,
        tax_type: values.tax_type,
        tax_amount: values.tax_amount,
        remarks: values.remarks

      },

        {
          headers
        }

      ).then((res: any) => {

        alert('succes')

        //router.push('/product')

      })

    },

    //validationSchema: SignUpSchema
    enableReinitialize: true

  });

  const formItems = [
    {
      textFieldName: 'CODE',
      id: 'code',
      name: 'code',
      type: "text",
      value: formik.values.code,
      touched: formik.touched.code,
      errors: formik.errors.code
    },
    {
      textFieldName: 'NAME',
      id: 'name',
      name: 'name',
      type: "text",
      value: formik.values.name,
      touched: formik.touched.name,
      errors: formik.errors.name
    },
    {
      textFieldName: 'BRAND',
      id: 'brand',
      name: 'brand',
      type: "text",
      value: formik.values.brand,
      touched: formik.touched.brand,
      errors: formik.errors.brand
    },
    {
      textFieldName: 'DESCRIPTION',
      id: 'description',
      name: 'description',
      type: "text",
      value: formik.values.description,
      touched: formik.touched.description,
      errors: formik.errors.description
    },
    {
      textFieldName: 'UNIT',
      id: 'unit',
      name: 'unit',
      type: "text",
      value: formik.values.unit,
      touched: formik.touched.unit,
      errors: formik.errors.unit
    },
    {
      textFieldName: 'TAX TYPE',
      id: 'tax_type',
      name: 'tax_type',
      type: "text",
      value: formik.values.tax_type,
      touched: formik.touched.tax_type,
      errors: formik.errors.tax_type
    },
    {
      textFieldName: 'TAX AMOUNT',
      id: 'tax_amount',
      name: 'tax_amount',
      type: "number",
      value: formik.values.tax_amount,
      touched: formik.touched.tax_amount,
      errors: formik.errors.tax_amount
    },
    {
      textFieldName: 'REMARKS',
      id: 'remarks',
      name: 'remarks',
      type: "remarks",
      value: formik.values.remarks,
      touched: formik.touched.remarks,
      errors: formik.errors.remarks
    },
  ]


  return (

    <Grid container justifyContent="center">

      <Grid container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
        sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

        <form onSubmit={formik.handleSubmit}>


          <Grid container my={3}>

            <Grid alignItems="center" width={200} display="flex"  >

              <Typography variant='h6' fontWeight="550"> CATEGORY  </Typography>
              <Typography variant='h6' fontWeight="550">:</Typography>

            </Grid>

            <Grid>

              <FormControl sx={{ width: 400 }}>

                <InputLabel id="demo-simple-select-label">Category</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="category"
                  onChange={selectCategory}
                >
                  {
                    fetchedData?.map((data: any, index: any) =>

                      <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                    )
                  }

                </Select>

              </FormControl>

            </Grid>


          </Grid>

          <Grid container my={3}>

            <Grid alignItems="center" width={200} display="flex"  >

              <Typography variant='h6' fontWeight="550"> SUB CATEGORY  </Typography>
              <Typography variant='h6' fontWeight="550">:</Typography>

            </Grid>



            <Grid>

              <FormControl sx={{ width: 400 }}>

                <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subCategorie}
                  label="sub category"
                  onChange={selectSubCategory}
                //onClick={() => setCategoryId(data.id)}
                >
                  {
                    subCategories?.map((data: any, index: any) =>

                      <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                    )
                  }

                </Select>

              </FormControl>

            </Grid>


          </Grid>

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
              }}>CREATE</Typography>

            </Button>

          </Grid>


        </form>

      </Grid>

    </Grid>

  )
}

export default page


































/* eslint-disable react-hooks/rules-of-hooks */
// "use client"

// import { Message } from '@mui/icons-material';
// import { Button, FormControl, Grid, TextField, Typography, InputLabel, Select, MenuItem, Alert, CircularProgress } from '@mui/material';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useParams, useRouter } from 'next/navigation'
// import React from 'react'
// import useBearerToken from '../../../hooks/useBearerToken';
// import { useQueryFetch, useQueryFetchByCode } from '../../../hooks/useFetch';
// import { BASE_URL } from '../../../urls/urls';


// function page() {

//   const router = useRouter();

//   const { id } = useParams();

//   const data = useQueryFetchByCode('products', id)

//   const finalData = data.fetchedData

//   //console.log('data', finalData?.tax_type);
//   console.log('////////////////////', finalData?.);



//   const token = useBearerToken()

//   const headers = {

//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',

//   };

//   const { fetchedData } = useQueryFetch('categories');

//   const subCategories = useQueryFetch('sub-categories').fetchedData

//   const [category, setCategory] = React.useState('');

//   const selectCategory = (event: SelectChangeEvent) => {
//     setCategory(event.target.value as string);
//   };

//   const [subCategorie, setSubCategorie] = React.useState('');

//   const selectSubCategory = (event: SelectChangeEvent) => {
//     setSubCategorie(event.target.value as string);
//   };

//   const formik = useFormik({

//     initialValues: {
//       code: finalData?.code,
//       name: finalData?.name,
//       brand: finalData?.brand,
//       description: finalData?.description,
//       unit: finalData?.unit,
//       category_id: finalData?.category_id,
//       subcategory_id: finalData?.subcategory_id,
//       tax_type: finalData?.tax_type,
//       tax_amount: finalData?.tax_amount,
//       remarks: finalData?.remarks
//     },

//     //validationSchema: SignUpSchema

//     onSubmit: values => {


//       //alert("//////")

//       // axios.patch(`${BASE_URL}products/${finalData.id}`, {

//       axios.patch('http://54.152.240.163:4000/products/21', {

//         code: values.code,
//         name: values.name,
//         brand: values.brand,
//         description: values.description,
//         unit: values.unit,
//         category_id: category,
//         subcategory_id: subCategorie,
//         tax_type: values.tax_type,
//         tax_amount: values.tax_amount,
//         remarks: values.remarks

//       },

//         {
//           headers
//         }

//       ).then((res: any) => {
//         console.log("res", res);

//         alert("working")

//         // <CircularProgress variant="determinate" value={100} />

//       })

//     },

//     //validationSchema: SignUpSchema

//     enableReinitialize: true
//   });

//   const formItems = [
//     {
//       textFieldName: 'CODE',
//       id: 'code',
//       name: 'code',
//       type: "text",
//       value: formik.values.code,
//       touched: formik.touched.code,
//       errors: formik.errors.code
//     },
//     {
//       textFieldName: 'NAME',
//       id: 'name',
//       name: 'name',
//       type: "text",
//       // value: formik.values.name,
//       value: formik.values.name,
//       touched: formik.touched.name,
//       errors: formik.errors.name
//     },
//     {
//       textFieldName: 'BRAND',
//       id: 'brand',
//       name: 'brand',
//       type: "text",
//       value: formik.values.brand,
//       touched: formik.touched.brand,
//       errors: formik.errors.brand
//     },
//     {
//       textFieldName: 'DESCRIPTION',
//       id: 'description',
//       name: 'description',
//       type: "text",
//       value: formik.values.description,
//       touched: formik.touched.description,
//       errors: formik.errors.description
//     },
//     {
//       textFieldName: 'UNIT',
//       id: 'unit',
//       name: 'unit',
//       type: "text",
//       value: formik.values.unit,
//       touched: formik.touched.unit,
//       errors: formik.errors.unit
//     },
//     {
//       textFieldName: 'TAX TYPE',
//       id: 'tax_type',
//       name: 'tax_type',
//       type: "text",
//       value: formik.values.tax_type,
//       touched: formik.touched.tax_type,
//       errors: formik.errors.tax_type
//     },
//     {
//       textFieldName: 'TAX AMOUNT',
//       id: 'tax_amount',
//       name: 'tax_amount',
//       type: "number",
//       value: formik.values.tax_amount,
//       touched: formik.touched.tax_amount,
//       errors: formik.errors.tax_amount
//     },
//     {
//       textFieldName: 'REMARKS',
//       id: 'remarks',
//       name: 'remarks',
//       type: "remarks",
//       value: formik.values.remarks,
//       touched: formik.touched.remarks,
//       errors: formik.errors.remarks
//     },
//   ]


//   return (

//     <Grid container justifyContent="center">

//       <Grid container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
//         sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

//         <form onSubmit={formik.handleSubmit}>


//           <Grid container my={3}>

//             <Grid alignItems="center" width={200} display="flex"  >

//               <Typography variant='h6' fontWeight="550"> CATEGORY  </Typography>
//               <Typography variant='h6' fontWeight="550">:</Typography>

//             </Grid>

//             <Grid>

//               <FormControl sx={{ width: 400 }}>

//                 <InputLabel id="demo-simple-select-label">Category</InputLabel>

//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={category}
//                   label="category"
//                   onChange={selectCategory}
//                 >
//                   {
//                     fetchedData?.map((data: any, index: any) =>

//                       <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

//                     )
//                   }

//                 </Select>

//               </FormControl>

//             </Grid>


//           </Grid>

//           <Grid container my={3}>

//             <Grid alignItems="center" width={200} display="flex"  >

//               <Typography variant='h6' fontWeight="550"> SUB CATEGORY  </Typography>
//               <Typography variant='h6' fontWeight="550">:</Typography>

//             </Grid>



//             <Grid>

//               <FormControl sx={{ width: 400 }}>

//                 <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={subCategorie}
//                   label="sub category"
//                   onChange={selectSubCategory}
//                 //onClick={() => setCategoryId(data.id)}
//                 >
//                   {
//                     subCategories?.map((data: any, index: any) =>

//                       <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

//                     )
//                   }

//                 </Select>

//               </FormControl>

//             </Grid>


//           </Grid>

//           {

//             formItems.map((data, index) =>

//               <Grid container key={index} my={3}>

//                 <Grid alignItems="center" width={200} display="flex"  >

//                   <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
//                   <Typography variant='h6' fontWeight="550">:</Typography>

//                 </Grid>

//                 <Grid bgcolor="">

//                   <TextField sx={{ width: 400 }}
//                     //variant="standard"
//                     //label={data.textFieldName}
//                     id={data.id}
//                     name={data.name}
//                     type={data.type}
//                     onChange={formik.handleChange}
//                     value={data.value}
//                     error={data.touched && Boolean(data.errors)}
//                     helperText={data.touched && data.errors}
//                     onBlur={formik.handleBlur}

//                   />

//                 </Grid>

//               </Grid>

//             )

//           }

//           <Grid container justifyContent="flex-end">

//             <Button type="submit" sx={{
//               bgcolor: '#5dbea3',
//               mb: 2,
//               "&:hover": {
//                 backgroundColor: 'rgb(7, 177, 77, 0.42)'
//               }
//             }}>

//               <Typography sx={{
//                 px: 1.5, py: 1,
//                 cursor: 'pointer',
//                 color: 'black',
//               }}>CREATE</Typography>

//             </Button>

//           </Grid>


//         </form>

//       </Grid>

//     </Grid>

//   )
// }

// export default page