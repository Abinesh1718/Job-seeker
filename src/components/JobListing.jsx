import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login/style.scss';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button, createTheme, ThemeProvider } from '@mui/material'
import { joblistSearch } from '../sevices/account';

function JobListing() {
  const [job, setJob] = useState([]);

  const [input, setinput] = useState("")
  const imagePath = require('../assets/images/com-logo-3.png');

  const navigate = useNavigate();

  const handleNavigate = (data) => {

    const serializedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/jobview?job=${serializedData}`);


  }



  const handleJobList = async () => {

    const body = {
      search: input
    }
    try {
      const dataList = await joblistSearch(body)
      console.log(dataList)
      setJob(dataList?.data)
    } catch (error) {

      console.log(error);

    }
  }


  useEffect(() => {
    handleJobList()
  }, [input])

  return (
    <div className="container my-5">
      <h3 style={{ color: "#223385" }}>Active Job's</h3>
      <div className="row mb-4">
        <div style={{ width: 500 }}>
          <input value={input} onChange={(e) => setinput(e.target.value)} style={{ height: 50 }} type="text" className="form-control" placeholder="Search Skills,title....." />
        </div>
      </div>
      <div className="row">
        {job?.map((job) => {
          return (
            < div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={job?.id
            }>
              <div className="card custom-card">
                <img
                  style={{ width: '20%', height: 'auto' }}
                  src={imagePath}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{job.jobtitle}</h5>
                  <p className="card-text">{job?.description}</p>
                  <Button style={{ outlineColor: "black" }} variant="outlined" onClick={(e) => handleNavigate(job)}>Apply for this job</Button>
                  {/* <Button type="submit" style={{ display: 'flex', outlineColor: "black", left: 400, width: 300, margin: 30 }}>Submit </Button> */}

                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default JobListing;
