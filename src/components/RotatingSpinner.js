import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import '../Styles/RotatingSpinner.css'


const RotatingSpinner = () =>{
  return(
    <div className='rotating-spinner'>
      <Stack id="spinner" justifyContent="center" alignItems="center" sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
      <b>Loading</b>
    </div>
  )
};

export default RotatingSpinner;