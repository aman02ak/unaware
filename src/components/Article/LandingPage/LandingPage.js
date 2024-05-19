import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Style/LandingPage.css';
import { useNavigate } from "react-router-dom";

function LandingPage({
  isAppBgColorDark
}) {
  const navigate = useNavigate();
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect (() => {
    setRegisteredCourses([{
      courseId: 1,
      courseName: "A-Z DSA Course",
      courseDescription: "Boost your DSA skills with our handy cheat sheet",
      publicImagePath: "",
      isPurchased: true
    },
    {
      courseId: 2,
      courseName: "A-Z DSA Course",
      courseDescription: "Boost your DSA skills with our handy cheat sheet",
      publicImagePath: "",
      isPurchased: true
    },
    {
      courseId: 3,
      courseName: "A-Z DSA Course",
      courseDescription: "Boost your DSA skills with our handy cheat sheet",
      publicImagePath: "",
      isPurchased: true
    },
    {
      courseId: 4,
      courseName: "A-Z DSA Course",
      courseDescription: "Boost your DSA skills with our handy cheat sheet",
      publicImagePath: "",
      isPurchased: true
    }
    ])
  }, []);

  const handleViewClick = (courseId) => {
    navigate(`/course/${courseId}`);
  }

  return (
    <div className='article-landing-page grid grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        registeredCourses.length == 0 ?
          <span>{`No Courses available, Please do enroll to some`}</span>
          : null
      }
      {
        registeredCourses.map((registeredCourse, key) => {
          return (
            <span 
              key={key} 
              className={`course-card clickable ${isAppBgColorDark ? 'light-border' : 'dark-border'}`}
              onClick={() => handleViewClick(registeredCourse.courseId)}
            >
              <img src={`/company_logo.png`} alt={registeredCourse.courseName} />
              <span className='course-card-course-name'>{registeredCourse.courseName}</span>
              <span className={`course-card-course-description ${isAppBgColorDark ? 'light-background' : 'pencil-background'}`}>{registeredCourse.courseDescription}</span>
              <span className={`course-card-view-button`}>
                <Button 
                  className='course-card-action-button' 
                  // onClick={handleViewClick}
                >View</Button>
              </span>
            </span>
          )
        })
      }
    </div>
  )
}

export default LandingPage;