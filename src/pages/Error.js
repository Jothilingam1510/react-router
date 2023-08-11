import { Typography } from '@mui/material'
import React from 'react'
import { Link }from 'react-router-dom'

function Error() {
  return (<>
<Typography variant='h4'> 404 page not fount</Typography><br/>

<Typography> Go to <Link to ="/">home page</Link></Typography> 
</>
 )
}

export default Error