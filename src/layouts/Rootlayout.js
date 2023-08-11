import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import { Container } from '@mui/material'
import AppBreadcrumbs from '../Components/AppBreadcrumbs'

const Routlayout = () => {
  return (
    <>
    <Nav/>
    <Container sx={{p:3 }}>
      <AppBreadcrumbs/>
    </Container>
    <Container sx={{p:5 }}>
      <Outlet/>
    </Container>
  
    </>
  )
}

export default Routlayout