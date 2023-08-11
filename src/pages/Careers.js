import { Typography } from '@mui/material'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CareerList from '../Components/CareerList'
import { styled } from 'styled-components'

const StyledLink = styled(Link)({
  textDecoration:'none'
})


const Careers = () => {
  const CareerData = useLoaderData()
   console.log(CareerData) 
  return (
    <>
   <Typography variant='h3'>Careers</Typography>
   {
    CareerData && CareerData.map((career) => {
      return(
      <StyledLink to={career.id.toString() } key={career.id}>
      <CareerList title={career.title}  location={career.location} />
      </StyledLink>
      );
    })
   }
    </>
  )
}

export const careerLoader = async () => {
  const response = await fetch("  http://localhost:4000/careers")
   if(!response.ok){
    throw new Error('job not found') 
   }

  const jsonResponse = await response.json()

  return jsonResponse
}

export default Careers