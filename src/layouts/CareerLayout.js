import { Container, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
  <>
  <Typography variant='body'> what are the courses do you want to be selected in this list </Typography>
  <Container sx={{p:5}}> 
  <Outlet/>
  </Container>
  </>
  )
}

export default CareerLayout