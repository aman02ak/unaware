import { useState, useEffect } from "react";
// import './Style/LandingPage.css';

import ArticleIndex from "../components/Article/Index";
import CommonNavigationIndexPage from "../CommonNavigation/Index";

function LandingPage({
  pageToFetch
}) {
  const [isAppBgColorDark, setIsAppBgColorDark] = useState(true);
  const [floatingAds, setFloatingAds] = useState({
    isVisible: false,
    data: "Sample advertisement, grab 50% off"
  });

  useEffect(() => {
    setTimeout(() => {
      setFloatingAds({
        isVisible: false,
        data: "Sample advertisement, grab 50% off"
      });
    }, 1000);
  }, []);
  
  return (
    <CommonNavigationIndexPage 
      articleReactComponent = {<ArticleIndex pageToFetch={pageToFetch}/>}
      isAppBgColorDark = {isAppBgColorDark}
      setIsAppBgColorDark = {setIsAppBgColorDark}
      floatingAds = {floatingAds}
    />
  );
}

export default LandingPage;
