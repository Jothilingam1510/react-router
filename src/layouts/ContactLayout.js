import { styled } from '@material-ui/core'
import { Typography,Box } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StyledLinkButton = styled(NavLink)({
    textDecoration:'none',
    color:"skyblue",
    fontSize:20,
    "&.active":{
        backgroundColor:'navy',
    },
    backgroundColor:"#187611",
    padding:10,
    borderRadius:5
})

const ContactLayout = () => {
  return (
    <>
    <Typography variant='hr'> Contact </Typography>
    <Typography varient="body1">Ipsum in pariatur nostrud sunt incididunt tempor ex duis. Aliquip irure deserunt nostrud exercitation. Dolor amet laboris labore nostrud culpa Lorem nostrud. Dolor officia qui cillum anim adipisicing proident adipisicing mollit elit ullamco deserunt eiusmod dolor.</Typography>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:"center", my:3,gap:10}}>
    <StyledLinkButton to='mail'>Mail Us</StyledLinkButton>
    <StyledLinkButton to='phone'>Call Us</StyledLinkButton>
    </Box>


    <Outlet/>
    </>
  )
}

export default ContactLayout