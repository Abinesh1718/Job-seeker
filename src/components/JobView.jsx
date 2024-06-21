import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';

import { ReactComponent as LoginBack } from '../assets/images/left-nav.svg';
import { useNavigate } from 'react-router-dom';
function JobView() {
  const navigate = useNavigate();
  const [jobData, setjobData] = useState({})

  const handleGoBack = () => {
    navigate(-1);
  };


  const queryParams = new URLSearchParams(window.location.search);
  const job = queryParams.get('job');



  const getData = () => {
    const userData = JSON.parse(decodeURIComponent(job));
    console.log(userData);
    setjobData(userData)

  }


  useEffect(() => {
    job && getData()
  }, [job])


  const handleEmailClick = () => {
  
    const subject = encodeURIComponent("Application for the Position");
    const body = encodeURIComponent("Dear Hiring Manager,\n\nI am interested in applying for the position. Please find my application details below.\n\nBest regards,\n[Your Name]");
    const mailtoLink = `mailto:blubridge@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };


  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>

      <Button className='loginBackBtn' onClick={handleGoBack} style={{ backgroundColor: 'rgb(245, 250, 255)', padding: 50 }}>
        <LoginBack />

        <span>Back</span>
      </Button><div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card job-card">
              <Button style={{ display: 'flex', outlineColor: "black", left: 500, width: 300, margin: 30, }} variant="outlined" onClick={() => handleEmailClick()} >Apply Now</Button>
              <div className="card-body text-center">
                <img width={300} height={400} src={require('../assets/images/com-logo-3.png')} className="company-logo" alt="Company Logo" />
                <h2 className="ca3rd-title">{jobData.companyName}</h2>
                <h4 className="card-subtitle mb-2 text-muted">{job.jobTitle}</h4>
                <hr />
                <h5 className="card-subtitle">Contact</h5>
                <p className="card-text">Email : blubridge@gmail.com</p>
                <hr />

                <h5 className="card-subtitle">Skills</h5>
                {/* <p className="card-text">{jobData.skills}</p> */}
                {jobData.skills && jobData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
                <hr />
                <h5 className="card-subtitle mb-2">Salary :</h5>
                <p className="card-text"> INR : {jobData.salary}</p>
                <hr />
                <h5 className="card-subtitle mb-2">Job Description</h5>
                <p className="card-text">{jobData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobView;
