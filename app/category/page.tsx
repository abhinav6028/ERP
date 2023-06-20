"use client"
import { Grid } from '@mui/material'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button'
import TableUi from '../../Components/UI/TableUi/TableUi'
import useBearerToken from '../../hooks/useBearerToken'

function page() {



  const TABLE_HEAD = ["name", "description",];

  const TABLE_CELL = ["name", "description",];


  return (

    <Grid>

      <CreateButton path="/category/create">CREATE</CreateButton >

      <TableUi

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="categories"

        editPath="category"

        fileName="category"

      />

    </Grid>

  )
}

export default page

