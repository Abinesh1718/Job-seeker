import React, { useEffect, useState } from 'react';
// import SignInCarosel from '../employer/signInCarousel'
import { ReactComponent as LoginBg } from '../../assets/images/sign-in-bg.svg';
import { Button } from '@mui/material';
import { ReactComponent as LoginBack } from '../../assets/images/left-nav.svg';
import { useNavigate } from 'react-router-dom';
import './style.scss'

const JobSeekerBanner = (props) => {
  const navigate = useNavigate();
  const [locationValue, setLocationValue] = useState('');
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="SinginFormLeft" style={{ backgroundColor: '#F5FAFF' }}>
      <Button className='loginBackBtn' onClick={handleGoBack} style={{ backgroundColor: 'rgb(245, 250, 255)' }}>
        <LoginBack />
        <span>Back</span>
      </Button>
      <LoginBg className="SinginFormBgImg BannerSVG" />
      <div className="SinginFormCarouselContainer">
      </div>
    </div>
  );
}

export default JobSeekerBanner;