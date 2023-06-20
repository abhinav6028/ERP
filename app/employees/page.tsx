"use client"
import React from 'react';
import CreateButton from '../../Components/UI/Button/Button';
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material'


function page() {
    const TABLE_HEAD = ["NAME", "MOBILE", "CODE", "ADRESS"];

    const TABLE_CELL = ["name", "mobile", "code", "address"];


    return (

        <Grid>

            <CreateButton path="/employees/create">CREATE</CreateButton >

            <TableUi

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="employees"

                fileName="employees"

            />

        </Grid>

    )
}

export default page