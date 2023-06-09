"use client"
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import Popup from "reactjs-popup";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { CreateButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ProductTable(props: any) {

    const router = useRouter();

    const { TABLE_HEAD, TABLE_CELL, API_NAME, editPath, heading, fileName } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    return (

        <Grid container md={12} justifyContent="center" sx={{ mb: 'auto' }}>

            <CreateButton heading={heading} fileName={fileName} />

            <Grid container lg={11} bgcolor="" border="1px solid black" height="fit-content">

                <TableContainer  >

                    <Table aria-label="simple table">

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

                                    <TableRow key={index} sx={{ "&:hover": { backgroundColor: ' #E5E4E2', } }}>

                                        <TableCell
                                            onClick={() => router.push(`/product/detailpage/${data.code}`)}
                                            align="center">

                                            <Typography sx={{ fontWeight: 550 }}> {index + 1} </Typography>

                                        </TableCell>

                                        {

                                            TABLE_CELL.map((items: any, index: any) =>

                                                <TableCell
                                                    onClick={() => router.push(`/product/detailpage/${data.code}`)}
                                                    key={index} sx={{ cursor: 'pointer' }} align="center">

                                                    <Typography sx={{ fontWeight: 550 }}> {data[items]} </Typography>

                                                </TableCell>

                                            )

                                        }

                                        <TableCell align="center">

                                            <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer' }} />} position="right center">

                                                <Box bgcolor="#ffff" sx={{
                                                    borderRadius: 1.5,
                                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                                }}>

                                                    <Edit fileName={fileName} id={data.id} />

                                                    <Delete url={API_NAME} id={data.id} />

                                                </Box>

                                            </Popup>

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

export default ProductTable