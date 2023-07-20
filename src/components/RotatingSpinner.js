import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/rotatingspinner-styles.css'


const RotatingSpinner = () =>{
  return(
    <div className='rotating-spinner'>
      <Stack id="spinner" justifyContent="center" alignItems="center" sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
       <img id="home-logo-rotating-spin" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
    </div>
  )
};

export default RotatingSpinner;