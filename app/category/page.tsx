"use client" 
import { Grid } from '@mui/material'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button'
import TableUi from '../../Components/UI/TableUi/TableUi'

function page() {
  const TABLE_HEAD = ["NAME", "CATEGORY", "SUB CATEGORY",]


  return (

    <Grid>

      <CreateButton path="/category/create">CREATE</CreateButton >

      <TableUi

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

      />

    </Grid>

  )
}

export default page

