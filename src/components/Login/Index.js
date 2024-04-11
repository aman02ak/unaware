import { React, useEffect } from 'react';
import './style/Index.css';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  width: '400px',
  height: '400px'
};

function LogInIndex({
    open,
    handleClose
}) {
    
  const handleCloseClicked = () => {
      // clear form
      handleClose();
  }

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
                <span>Login</span>
                <CancelIcon 
                    className='clickable'
                    onClick={handleCloseClicked}
                />
            </header>
            <div className='login-modal-body'>
                {`Service Under Development / Maintainance`}
            </div>
            </Box>
        </Fade>
      </Modal>
  )
}

export default LogInIndex