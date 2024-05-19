import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import './index.css';

import LandingPage from './ApplicationRoutes/LandingPage';

const routeData = require('./Utils/ArticleRouteData.json');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <div>
        <Routes >
            <Route path="/" element={<LandingPage pageToFetch={routeData.LANDING_PAGE}/>} />
            <Route path="/course/:courseId/" element={<LandingPage pageToFetch={routeData.COURSE_PAGE}/>} />
            <Route path="/profile/:username/" element={<LandingPage pageToFetch={routeData.PROFILE_PAGE}/>} />
            <Route path="/blog" element={<LandingPage pageToFetch={routeData.BLOG_PAGE}/>} />
            <Route path="/about" element={<LandingPage pageToFetch={routeData.ABOUT_PAGE}/>} />
        </Routes >
      </div>
    </Router>
);