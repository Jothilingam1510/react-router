import { AppBar, Toolbar, Typography ,Box, Container, styled} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)({
    textDecoration:'none',
    color:'white',
    fontSize:'20px',
    '&.active':{
        background:'navy',
        padding:'10px',
        borderRadius:'5px'
    }
})

const Nav = () => {
  return (
  <>
    <AppBar position='static' >
        <Container>
        <Toolbar>
            <Typography variant='h5'>
                Technologies
            </Typography>
            <Box sx={{display:'flex', marginLeft:'500px', alignItems:'center', gap:'40px'}}>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/About'>About</StyledNavLink>
            <StyledNavLink to='/Careers'>Careers</StyledNavLink>
            <StyledNavLink to='/Contact'>Contact</StyledNavLink>
            
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
  </>
  )
}
export default Nav 
