import './Style/Index.css';

import NavigationBar from "../components/NavigationBar";
import SectionIndex from '../components/Section/Index'

function CommonNavigationIndexPage ({ 
    articleReactComponent,
    isAppBgColorDark,
    setIsAppBgColorDark,
    floatingAds
}) {
  
  return (
    <div className={`main-container ${isAppBgColorDark ? 'dark-background' : 'white-background'}`}>
      <div className={`main-container-section`}>
        <SectionIndex 
          user={undefined}
        />
      </div>
      <div className={`main-container-article`}>
        {/* main container navigation header */}
        <NavigationBar 
          isAppBgColorDark={isAppBgColorDark}
          setIsAppBgColorDark={setIsAppBgColorDark}
          floatingAds={floatingAds}
          user={undefined}
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
