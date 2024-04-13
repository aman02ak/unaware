import { React, useState, useEffect } from 'react';
import './style/Index.css';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  width: '400px',
  height: '600px'
};

function SignUpIndex({
    open,
    handleClose
}) {
  // variable declaration and initialization
  const [publicInformation, setPublicInformation] = useState(undefined);
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    isConfirmPasswordMatching: true
  });
  
  // as use-effects
  useEffect(() => {
    // reading available public information
    fetch('public_information.json').then(function(response){
      return response.json();
    }).then(function(myJson) {
      setPublicInformation(myJson);
      return myJson;
    });

    
  }, []);

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        handleCloseClicked();
      }
    };

    window.addEventListener("keyup", escFunction);

    return () => {
      window.removeEventListener("keyup", escFunction);
    };
  }, []);

  // all javascript functions
  const handleCloseClicked = () => {
    clearForm();
    handleClose();
  }
  const handleSignInGoogleAccount = () => {
    alert('Service Under developement / maintainance');
  }

  const handleUpdateForm = (fieldName, event) => {
    switch(fieldName) {
      case "USERNAME":
        setFormData(prevState => ({ ...prevState, username: event.target.value }));
        break;
      case "FULL_NAME":
        setFormData(prevState => ({ ...prevState, fullname: event.target.value }));
        break;
      case "EMAIL":
        setFormData(prevState => ({ ...prevState, email: event.target.value }));
        break;
      case "PASSWORD":
        setFormData(prevState => ({ ...prevState, password: event.target.value }));
        if(event.target.value.length === 0 || formData.confirmPassword === event.target.value)
          setFormData(prevState => ({ ...prevState, isConfirmPasswordMatching: true }));
        else
          setFormData(prevState => ({ 
            ...prevState, 
            isConfirmPasswordMatching: (formData.confirmPassword === event.target.value) 
          }));
        break;
      case "CONFIRM_PASSWORD":
        setFormData(prevState => ({ ...prevState, confirmPassword: event.target.value }));
        if(event.target.value.length === 0)
          setFormData(prevState => ({ ...prevState, isConfirmPasswordMatching: true }));
        else
          setFormData(prevState => ({ 
            ...prevState, 
            isConfirmPasswordMatching: (formData.password === event.target.value) 
          }));
        break;
    }
  }
  const clearForm = () => {
    setFormData({
      username: '',
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      isConfirmPasswordMatching: true
    });
  }
  const handleSignupSubmit = () => {
    alert('Service Under developement / maintainance');
    clearForm();
  }
  const handleSignIn = () => {
    clearForm();
    handleClose();
  }

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleCloseClicked}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <header className='login-modal-header'>
                <span>Signup</span>
                <CancelIcon 
                    className='clickable'
                    onClick={handleCloseClicked}
                />
            </header>
            <div className='login-modal-body'>
                <div className='modal-body-header'>
                  <span className='body-header-message-text'>Ready to Begin</span>
                  <span className='body-header-message-text'>Your Journey with</span>
                  <span className='body-header-org-name-text text-red-600'>{publicInformation?.COMPANY_NAME}</span>
                </div>
                <div className='modal-body-signin'>
                  {/* all sigin option */}
                  {/* Sigin with google */}
                  <div className='body-signin-with-gmail'>
                    <div 
                      className='signin-option-google clickable'
                      onClick={handleClose}  
                    >
                      <img 
                        src={`/google_logo.png`}
                        alt={`Google Logo`}
                      ></img>
                      <span>{`Sign in with Google`}</span>
                    </div>
                  </div>
                  <div className='body-signin-divider'>
                    <span className='signin-horizontal-line'></span>
                    <span className='text'>{`Or, sign up with`}</span>
                    <span className='signin-horizontal-line'></span>
                  </div>

                  {/* Sigin with form */}
                  <div className='body-signin-with-email-pass'>
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder='Username'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      value={formData?.username}
                      onChange={(e) => handleUpdateForm('USERNAME', e)}
                      inputProps={{ style: { width: '310px', fontFamily: 'Arial', color: 'white'}}}
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder='Full Name'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      value={formData?.fullname}
                      onChange={(e) => handleUpdateForm('FULL_NAME', e)}
                      inputProps={{ style: { width: '310px', fontFamily: 'Arial', color: 'white'}}}
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder='john@gmail.com'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      value={formData?.email}
                      onChange={(e) => handleUpdateForm('EMAIL', e)}
                      inputProps={{ style: { width: '310px', fontFamily: 'Arial', color: 'white'}}}
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder='Password'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      type='password'
                      variant="standard"
                      value={formData?.password}
                      onChange={(e) => handleUpdateForm('PASSWORD', e)}
                      inputProps={{ style: { width: '310px', fontFamily: 'Arial', color: 'white'}}}
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder='Confirm Password'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      type='password'
                      variant="standard"
                      value={formData?.confirmPassword}
                      onChange={(e) => handleUpdateForm('CONFIRM_PASSWORD', e)}
                      inputProps={{ style: { width: '310px', fontFamily: 'Arial', color: 'white'}}}
                    />
                    <div className='body-signin-with-pass-reset text-red-600 clickable'>
                      {formData.isConfirmPasswordMatching ? `` : `Password do not match`}
                    </div>                 
                    <div className='body-signin-with-pass-action-button'>
                      <Button 
                        variant="contained"
                        onClick={handleSignupSubmit}
                        style={{ width: '343px', background: 'rgb(225 29 72 / 59%)' }}
                      >Verify and Sign up</Button>
                    </div>
                  </div>
                </div>
                <div className='modal-body-signup-text'>
                  <span>{`Already have an account?`}</span> 
                  <span 
                    className='text-active-link text-red-600'
                    onClick={handleSignIn}
                  >{`${" "}Sign in`}</span>
                </div>
            </div>
            </Box>
        </Fade>
      </Modal>
  )
}

export default SignUpIndex;