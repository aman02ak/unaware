import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import CoursePage from './CoursePage/CoursePage';

function Index({
  isAppBgColorDark,
  pageToFetch
}) {
  const routeData = require('../../Utils/ArticleRouteData.json');
  
  switch(pageToFetch) {
    case routeData.LANDING_PAGE:
      return (<div className='article-content'><LandingPage isAppBgColorDark={isAppBgColorDark}/></div>);
    case routeData.PROFILE_PAGE:
      return (<div className='article-content'>{pageToFetch + " B"}</div>);
    case routeData.BLOG_PAGE:
      return (<div className='article-content'>{pageToFetch + " C"}</div>);
    case routeData.ABOUT_PAGE:
      return (<div className='article-content'>{pageToFetch + " D"}</div>);
    case routeData.COURSE_PAGE:
      return (<div className='article-content'><CoursePage isAppBgColorDark={isAppBgColorDark}/></div>);
  }
}

export default Index;