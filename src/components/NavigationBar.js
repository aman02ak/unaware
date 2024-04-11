import { React, useState } from 'react';
import './styles/NavigationBar.css';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Face2Icon from '@mui/icons-material/Face2';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import LogInIndex from './Login/Index';

import { useNavigate } from "react-router-dom";

function NavigationBar({
    isAppBgColorDark,
    setIsAppBgColorDark,
    floatingAds,
    user
}) {
    const navigate = useNavigate();
    const iconStyle = {
        width: '30px',
        height: '30px'
    };
    const [openLogIn, setOpenLogIn] = useState(false);
    const handleOpenLogIn = () => setOpenLogIn(true);
    const handleCloseLogIn = () => setOpenLogIn(false);

    const handleLogInIconClicked = () => {
        if(!user?.loggedIn)
            handleOpenLogIn();
        else
            navigate(`/profile/${user?.username}`);
    }
  return (
    <div className='navigation-container'>
        <LogInIndex
            open={openLogIn}
            handleClose={handleCloseLogIn}
        />
        <marquee className={`floating-ads ${floatingAds.isVisible ? 'boxVisibleOn' : 'boxVisibleOff'}`}>
            {floatingAds.data}
        </marquee>
        <div className="navigation-header">
            <span className='navigation-header-left'>
                <KeyboardDoubleArrowRightIcon style={iconStyle}/>
            </span>
            <span className='navigation-header-right'>
                <span
                    onClick={() => {setIsAppBgColorDark(!isAppBgColorDark)}}
                    className='clickable'
                >{
                    isAppBgColorDark ?
                    <LightModeIcon style={iconStyle}/>
                    : <NightsStayIcon style={iconStyle}/>
                }</span>
                <span className='item-partitioner-vertical'></span>
                <span 
                    className='navigation-login clickable'
                    onClick={handleLogInIconClicked}
                >
                    <span>{
                        !user?.loggedIn ? "LogIn" : user?.username
                    }</span>
                    <span>{
                        user?.loggedIn && user?.gender === "Female" ? <Face2Icon style={iconStyle}/> : <FaceIcon style={iconStyle}/>
                    }</span>
                </span>
            </span>
        </div>
    </div>
  )
}

export default NavigationBar