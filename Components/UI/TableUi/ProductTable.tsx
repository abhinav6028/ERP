"use client"
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Edit } from "../ActionIcons/ActionIcons";
import TabPagination from "../Pagination/Pagination";

function ProductTable(props: any) {

    const router = useRouter();

    const { TABLE_HEAD, TABLE_CELL, API_NAME, editPath, heading, btn_path } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    console.log("fetchedData", fetchedData);


    return (

        <Grid container justifyContent="center" sx={{ mt: 5 }}>

            <Grid container bgcolor="" lg={11} sx={{ my: 3, alignItems: 'center' }}>

                <Typography variant="h4" fontWeight="bolder">{heading}</Typography>

                <Box bgcolor="#1F51FF"
                    onClick={() => router.push(`${btn_path}`)}
                    sx={{ ml: 3, py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer' }}>

                    <Typography sx={{ fontWeight: 600, color: '#ffff' }}>ADD NEW ITEM</Typography>

                </Box>

            </Grid>

            <Grid item container lg={11}
                sx={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                }}>

                <TableContainer>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead>

                            <TableRow>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600 }} variant='h6'>SI <br /> no </Typography>

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

                                    <TableRow key={index} onClick={() => router.push(`/product/detailpage/${data.code}`)} sx={{ "&:hover": { backgroundColor: ' #E5E4E2', } }}>

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

                                            <Edit editPath={editPath} id={data.code} />

                                        </TableCell>

                                    </TableRow>

                                )
                            }

                        </TableBody>

                    </Table>

                </TableContainer>



                {/* <TabPagination /> */}



                

            </Grid>

        </Grid >

    )

}

export default ProductTable