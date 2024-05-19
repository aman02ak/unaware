import { React, useState } from 'react';
import './Styles/Index.css';

import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';

import LogInIndex from '../Login/Index';

import { useNavigate } from "react-router-dom";

function Index({
    user,
    hideFloatingNavigation
}) {
    const navigate = useNavigate();
    let sectionFixedItem = require('../../Utils/SideNavBarData.json');
    const [openLogIn, setOpenLogIn] = useState(false);
    const handleOpenLogIn = () => setOpenLogIn(true);
    const handleCloseLogIn = () => setOpenLogIn(false);


    const handleClickFromFixedComponent = (itemName, navigateToPath) => {
        switch(itemName) {
            case "Profile":
                // if logged in navigate to that path
                if(user?.loggedIn)
                    navigate(`/${navigateToPath}/${user?.username}`);
                else{
                    // give alert as user is not logged in
                    alert("User not logged in.");
                    handleOpenLogIn();
                }
                break;
            case "Blog":
                navigate(`/${navigateToPath}`);
                break;
            case "About":
                navigate(`/${navigateToPath}`);
                break;
            case "Report Bug":
                alert('Service Under Development / Maintainance');
                break;
            case "Enroll Course":
                // if logged in navigate to that path
                if(user?.loggedIn)
                    alert('Service Under Development / Maintainance');
                else{
                    // give alert as user is not logged in
                    alert("User not logged in.");
                    handleOpenLogIn();
                }
                break;
        }
        hideFloatingNavigation();
    };

    const getSectionItemIcon = (itemName) => {
        switch(itemName) {
            case "Profile":
                return <AccountCircleIcon />;
            case "Blog":
                return <BookIcon />;
            case "About":
                return <InfoIcon />;
        }
    };
  return (
    <div className='side-navigator'>
        <LogInIndex
            open={openLogIn}
            handleClose={handleCloseLogIn}
        />
        <div className='side-navigator-logo'>
            <img 
                src={`/company_logo.png`} 
                alt={`Company Name`}
                onClick={() => navigate('/')}
                className='clickable'
            ></img>
        </div>
        <div className='side-navigator-content'>
            {
                sectionFixedItem?.ITEMS?.map((object, objectKey) => {
                    return (
                        <div
                            key={objectKey}
                            className='navigator-content-child' 
                            onClick={() => handleClickFromFixedComponent(object.ITEM_NAME, object.NAVIGATE_TO)}
                        >
                            <span>{getSectionItemIcon(object.ITEM_NAME)}</span>
                            <span className='clickable'>{object.ITEM_NAME}</span>
                        </div>
                    )
                })
            }
            {/* list all course now */}
        </div>
        <div className='side-navigator-action'>
            <Button 
                variant="contained"
                className='clickable'
                style={{ background: '#ee4b2b' }}
                onClick={() => handleClickFromFixedComponent('Enroll Course')}
                // disabled={true}
            >Enroll Course</Button>
            <Button 
                variant="contained"
                className='clickable'
                style={{ background: '#ee4b2b' }}
                onClick={() => handleClickFromFixedComponent('Report Bug')}
                // disabled={true}
            >Report Bug</Button>
        </div>
    </div>
  )
}

export default Index