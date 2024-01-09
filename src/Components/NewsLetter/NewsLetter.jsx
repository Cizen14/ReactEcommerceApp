import React from 'react'
import './NewsLetter.css'
import { Button, Stack, TextField } from '@mui/material'
const NewsLetter = () => {
  return (
   
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p> Subscribe to our newsltter and stay updated</p>
        <Stack>
            <TextField id="email" label="Your Email Id"  />
            <Button  color="inherit" variant ="text" className='btn'>Subscribe</Button>
         </Stack>
    </div>
  

    
  )
}

export default NewsLetter
