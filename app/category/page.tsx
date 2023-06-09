"use client"
import React from 'react';
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material'
import { CreateButton } from '../../Components/UI/Button/Button';


function page() {

    const TABLE_HEAD = ["NAME", "DESCRIPTION"];

    const TABLE_CELL = ["name", "description"];


    return (

        <Grid>

            {/* <CreateButton path="/category/create">CREATE</CreateButton > */}

            <TableUi

                heading="Categories"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="categories"

                fileName="category"

            /> 

        </Grid>

    )
}

export default page