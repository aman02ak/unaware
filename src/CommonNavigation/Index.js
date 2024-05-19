import { useState } from 'react';
import './Style/Index.css';

import AppHeader from "../Component/AppHeader";
import SectionIndex from '../Component/Section/Index';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  width: 300,
  height: '100vh',
  bgcolor: 'var(--blackColor)',
  border: '2px solid #000',
  boxShadow: 24,
};

function CommonNavigationIndexPage ({ 
    articleReactComponent,
    isAppBgColorDark,
    setIsAppBgColorDark,
    floatingAds
}) {
  const [showFloatingNavigation, setShowFloatingNavigation] = useState(false);

  const toggleFloatingNavigation = () => {
    setShowFloatingNavigation(!showFloatingNavigation);
  };
  const hideFloatingNavigation = () => {
    setShowFloatingNavigation(false);
  };
  return (
    <div className={`main-container ${isAppBgColorDark ? 'dark-background' : 'white-background'}`}>
      <div className={`main-container-section`}>
        <SectionIndex 
          user={undefined}
          hideFloatingNavigation={hideFloatingNavigation}
        />
      </div>
      <Modal
        open={showFloatingNavigation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`main-container-floating-section`}>
            <div className='floating-section-close-button-div'>
              <CloseIcon className='clickable' onClick={hideFloatingNavigation}/>
            </div>
            <SectionIndex 
              user={undefined}
              hideFloatingNavigation={hideFloatingNavigation}
            />
          </div>
        </Box>
      </Modal>
      <div className={`main-container-article`}>
        {/* main container navigation header */}
        <AppHeader 
          isAppBgColorDark={isAppBgColorDark}
          setIsAppBgColorDark={setIsAppBgColorDark}
          floatingAds={floatingAds}
          user={undefined}
          toggleFloatingNavigation={toggleFloatingNavigation}
        />
        
        <div className={`article-content`}>
            {articleReactComponent}
        </div>
        <div className={`main-container-footer`}> 
          {`Good to see you,`}<span>{` Click Here `}</span>{`to know more about organization`}
        </div>
      </div>
      
    </div>
  );
}

export default CommonNavigationIndexPage;
