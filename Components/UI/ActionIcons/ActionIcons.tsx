/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Box, Grid } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import axios from 'axios';


export const Edit = (props: any) => {

    const { id, fileName } = props;

    const router = useRouter();

    return (

        <Grid>

            <Box onClick={() => router.push(`/${fileName}/${id}`)}>

                <ModeEditIcon sx={{ cursor: 'pointer' }} />

            </Box>

        </Grid>
    )
}


export const Delete = (props: any) => {


    const { id, url } = props;

    //console.log("id////////////", url);


    const deleteItem = () => {

        const token = useBearerToken();

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`/${url}/${id}`,
            {
                headers
            }
        ).then(() => {
            alert("workinnnnnnnnnnnngggggggggggggggg")

        })
    }






    return (

        <Box onClick={deleteItem}>

            <DeleteIcon />

        </Box>

    )
}

