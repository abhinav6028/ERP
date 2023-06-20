import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function DetailPage(props: any) {

    const { finalData, fieledItems } = props;

    console.log("finalData//////////", finalData?.category?.name);




    return (

        <Grid container justifyContent="center">

            <Grid container lg={11} sx={{ bgcolor: '' }}>

                <Typography variant='h5' sx={{ fontWeight: 600 }}>OVERVIEW</Typography>

            </Grid>

            <Grid container lg={11} sx={{
                bgcolor: '', mt: 5, pb: 1.6,
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            }}>

                {
                    fieledItems.map((data: { fieledName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; itemName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) =>

                        <Grid container key={index} sx={{
                            mt: 1,
                        }}>

                            <Grid container lg={2}>

                                <Typography variant='h6' fontWeight="550" sx={{ ml: 3 }}>{data.fieledName}</Typography>
                                <Typography variant='h6' fontWeight="550" ml="auto" mr="5">:</Typography>

                            </Grid>

                            <Grid container lg={3} alignItems="center">

                                <Typography fontWeight="550" sx={{ ml: 2 }}>{data.itemName}</Typography>

                            </Grid>

                        </Grid>

                    )
                }

            </Grid>

        </Grid >
    )
}
