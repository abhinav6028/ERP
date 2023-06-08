"use client"
import { Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi'

function page(props: any) {



    return (

        <Grid>

            <TableUi />

        </Grid>
    )
}

export default page




















// "use client"


// import React from 'react'

// async function getData() {

//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

//     const headers = {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//     };

//     const res = await fetch('https://apierp.oyvaa.com/products', { headers });

//     const data = res.json();

//     return data

// }

// export default async function page() {

//     const data = getData();

//     console.log("@@@@@@@@@@", data);

//     return (
//         <Grid>page</Grid>
//     )
// }

// // export default page
// // import { Grid } from '@mui/material'
// // import React from 'react'
// // import TableUi from '../../Components/UI/TableUi/TableUi'

// // function page() {
// //     return (
// //         <Grid>

// //             <TableUi />

// //         </Grid>
// //     )
// // }

// // export default page