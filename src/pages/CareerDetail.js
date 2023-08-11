import { Divider, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import {  useLoaderData, useParams } from 'react-router-dom'

const CareerDetail = () => {
    const {id} =useParams()
    console.log(id)

      const jobData = useLoaderData()
      console.log(jobData)
  return (
    <>
 <Divider sx={{mx:20 , my:5 }}></Divider>
 <Typography variant='h3'>{jobData.title}</Typography>
 <Typography variant='h4'>{jobData.salary}</Typography>
 <Typography variant='h5' color={green}>{jobData.location}</Typography>
    </>
  )
}
///job detail

export const jobDetailLoader = async({params}) => {

  const {id} = params
  const response =await fetch(" http://localhost:4000/careers/" + id)
  if(!response.ok){
    throw new Error("job post not found")

  }

  const jsonResponse =await response.json();
  return jsonResponse

}

export default CareerDetail