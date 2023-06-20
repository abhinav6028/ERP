"use client"
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";

export default function TableUi(props: any) {

    const router = useRouter();

    const { TABLE_HEAD, TABLE_CELL, API_NAME, fileName } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    console.log("fetchedData", API_NAME);

    console.log("API_NAME", API_NAME);



    return (

        <Grid container justifyContent="center" sx={{ mt: 5 }}>


            <Grid item container lg={11}
                sx={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                }}
            >

                <TableContainer>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead>

                            <TableRow>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600 }} variant='h6'>SI NO</Typography>

                                </TableCell>

                                {
                                    TABLE_HEAD.map((table_head: any, index: any) =>

                                        <TableCell align="center" key={index} >

                                            <Typography sx={{ fontWeight: 600 }} variant='h6'>{table_head}</Typography>

                                        </TableCell>
                                    )
                                }

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600 }} variant='h6'>ACTIONS</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {
                                fetchedData?.map((data: any, index: any) =>

                                    <TableRow onClick={() => router.push(`/${fileName}/detailpage/${data.id}`)} key={index} sx={{ "&:hover": { backgroundColor: ' #E5E4E2', } }}>

                                        <TableCell align="center">

                                            <Typography sx={{ fontWeight: 550 }}> {index + 1} </Typography>
                                        </TableCell>

                                        {

                                            TABLE_CELL.map((items: any, index: any) =>

                                                <TableCell key={index} sx={{ cursor: 'pointer' }} align="center">

                                                    <Typography sx={{ fontWeight: 550 }}> {data[items]} </Typography>

                                                </TableCell>

                                            )

                                        }

                                        <TableCell align="center">

                                            <Edit fileName={fileName} id={data.id} />

                                            <Delete url={API_NAME} id={data.id} />

                                        </TableCell>

                                       


                                    </TableRow>

                                )
                            }

                        </TableBody>

                    </Table>

                </TableContainer>

            </Grid>

        </Grid >

    )

}
