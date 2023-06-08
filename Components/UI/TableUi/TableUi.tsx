
import Paper from '@material-ui/core/Paper/Paper'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TableUi() {

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);

    React.useEffect(() => {
        // Updating a state causes a re-render
        setInitialRenderComplete(true);
    }, []);

    const HEADING = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"]

    if (!initialRenderComplete) {

        return null;
    } else {

        return (

            <Grid container justifyContent="center">

                <Grid item lg={11} sx={{ mt: 5 }}>

                    <TableContainer component={Paper}>

                        <Table sx={{ width: '100%' }} aria-label="simple table">

                            <TableHead>

                                <TableRow >

                                    {
                                        HEADING.map((data, index) =>

                                            <TableCell key={index} align="center">

                                                <Typography sx={{
                                                    fontWeight: 600
                                                }} variant='h6'>{data}</Typography>

                                            </TableCell>

                                        )
                                    }

                                    <TableCell align="center">

                                        <Typography sx={{
                                            fontWeight: 600
                                        }} variant='h6'>ACTIONS</Typography>

                                    </TableCell>

                                </TableRow>

                            </TableHead>

                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="center">A</TableCell>
                                <TableCell align="center">B</TableCell>
                                <TableCell align="center">C</TableCell>
                                <TableCell align="center">D</TableCell>
                                <TableCell align="center">D</TableCell>
                                <TableCell align="center">D</TableCell>

                                <TableCell align="center">

                                    <MoreVertIcon />

                                </TableCell>

                            </TableBody>

                        </Table>

                    </TableContainer>

                </Grid>

            </Grid>
        )

    }


}
