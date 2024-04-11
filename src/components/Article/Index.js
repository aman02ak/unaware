import React from 'react';

function Index({
  pageToFetch
}) {
  const routeData = require('../../Utils/ArticleRouteData.json');
  
  switch(pageToFetch) {
    case routeData.LANDING_PAGE:
      return (<div>{pageToFetch + " A"}</div>);
    case routeData.PROFILE_PAGE:
      return (<div>{pageToFetch + " B"}</div>);
    case routeData.BLOG_PAGE:
      return (<div>{pageToFetch + " C"}</div>);
    case routeData.ABOUT_PAGE:
      return (<div>{pageToFetch + " D"}</div>);
  }
}

export default Index