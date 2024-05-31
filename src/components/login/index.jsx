import React, { useEffect, useState } from 'react';
import { Grid, TextField, InputLabel, FormControl, InputAdornment, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './style.scss'
import EmployerBanner from './employerBanner';
// import JobSeekerBanner from './jobSeekerBanner';
import LoginComponent from './loginComponent';
import JobSeekerBanner from './jobSeekerBanner';


const EmployerLogin = (props) => {
  // const stripe = require('stripe')(ENV_CONFIG.STRIPE_KEY);
  const queryParams = new URLSearchParams(window.location.search);
  const rolesEmployee = queryParams.get('roles');


  return (
    <div className="SinginFormPage">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} lg={6}>
          {rolesEmployee == 'emp' ? <EmployerBanner /> : <JobSeekerBanner />}
        </Grid>
        <Grid item xs={12} sm={6} lg={5}>
          <LoginComponent />
        </Grid>
      </Grid>
      <img src={require('../../assets/images/geo.png')} className="SignInGeoTop" alt="" />
      <img src={require('../../assets/images/geo1.png')} className="SignInGeoBottom" alt="" />
    </div>
  );
}

export default EmployerLogin;