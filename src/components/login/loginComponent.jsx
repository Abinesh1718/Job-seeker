import React, { useEffect, useState } from 'react';
import { Grid, TextField, InputLabel, FormControl, InputAdornment, Button, MenuItem, Menu, Popover, Typography, LinearProgress, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { NewPassword, RequestsPassword, loginWithOuth, subscribe } from '../../sevices/account'
import './style.scss'
// import { isEmptyObj, removeItemFrmLocalStorage, setCurrentUser } from '../../utils/genericUtilities';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Spin } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Key } from '@mui/icons-material';


const LoginComponent = (props) => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [emailError, setemailError] = useState("")

  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const roles = queryParams.get('roles');
  const signup = queryParams.get('signup');


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const Signup = () => {
    if (roles == 'emp') {
      navigate('/EmployerSignup')
    } else {
      navigate("/JobSeekerSignup")

    }
  }

  const Onblur = () => {
    let hasError = false;

    if (!email) {
      setemailError('Enter a valid email');
      hasError = true;
    } else {
      setemailError('');
    }

    if (!password) {
      setpasswordError('Enter a valid password');
      hasError = true;
    } else {

      setpasswordError('');
    }

    if (hasError) {
      return;
    }



  }

  const Onsubmit = async (event) => {
    event.preventDefault();

    if ((!emailError || passwordError) && (!email || !password)) {
      return
    }
    if (roles === 'emp') {
      navigate('/candidates');
    } else {
      navigate('/JobListing');
    }
  };



  const handleGoBack = () => {
    navigate(-1);
  };

  return (

    <div className="SinginFormRight">
      <div className="SinginFormTitleContainer">
        <span className="SinginFormTitle">
          {
            roles === 'jobseeker'
              ? 'Welcome Back'
              : roles === 'emp'
                ? signup && roles === 'emp'
                  ? 'Employer Signup'
                  : 'Employer Sign In'
                : 'Job Seeker Signup'
          }
        </span>
      </div>
      <div className="SinginFormPageContainer">
        <form onSubmit={Onsubmit}>
          <FormControl className="form-control">
            <InputLabel htmlFor="email-input">Email id</InputLabel>
            <TextField
              id="email-input"
              name="email"
              variant="outlined"
              value={email}
              onBlur={Onblur}
              error={!!emailError}
              helperText={emailError}
              onChange={(e) => setemail(e.target.value)}
              InputProps={{
                type: 'text',
                maxLength: 50,

              }}
            />
          </FormControl>
          <FormControl className="form-control">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Stack spacing={0.5}>
              <TextField
                id="password-input"
                variant="outlined"
                type="password"
                error={!!passwordError}
                helperText={passwordError}
                value={password}
                onBlur={Onblur}
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                inputProps={{ maxLength: 10 }}
              />
            </Stack>
          </FormControl>
          <Button disabled={!email && !password ? true : false}   type="submit" variant="contained" className="SinginFormBtn">
            Sign in
          </Button>
          <Button type="button" onClick={Signup} variant="outlined" className="SinginFormLoginBtn">
            {signup ? "Already have Account Login here" : "Don't have an account? Sign up here"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;