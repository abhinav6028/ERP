/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../Components/UI/DetailPage/DetailPage';
import { useQueryFetchById } from '../../../../hooks/useFetch';

function page() {

  const { id } = useParams();

  const data = useQueryFetchById('products', id)

  const finalData = data.fetchedData;

  console.log("finalData", finalData);

  const fieledItems = [

    {
      fieledName: "Product Name",
      itemName: finalData?.name
    },
    {
      fieledName: "Brand",
      itemName: finalData?.brand
    },
    {
      fieledName: "Product Name",
      itemName: finalData?.code
    },
    {
      fieledName: "Unit",
      itemName: finalData?.unit
    },
    {
      fieledName: "Category",
      itemName: finalData?.category?.name
    },
    {
      fieledName: "Sub Category",
      itemName: finalData?.subcategory?.name
    },
    {
      fieledName: "Created Date",
      itemName: finalData?.createdAt
    },

  ]


  return (

    <DetailPage

      fieledItems={fieledItems}

      finalData={finalData}

    />

  )
}

export default page 