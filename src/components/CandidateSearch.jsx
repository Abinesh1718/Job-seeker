
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login/style.scss'; // Import your custom CSS for additional styling
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Button, createTheme, ThemeProvider } from '@mui/material'
import { CandidatesSearch } from '../sevices/account';

function CandidateSearch() {
  const [job, setJob] = useState([]);
  const [input, setinput] = useState("")
  const imagePath = require('../assets/images/user3.png');

  const navigate = useNavigate();

  const handleNavigate = (data) => {
    console.log("HHBHBBB", data);
    const serializedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/candidatesview?user=${serializedData}`);
  }


  const handleSearch = async () => {
    const body = {
      search: input
    }
    console.log("bodybodybody", body)

    try {
      const searchuser = await CandidatesSearch(body)
      console.log("KJNKNKJN", searchuser?.data)
      setJob(searchuser?.data)
    } catch (err) {
      console.log("HGVGHVVHVHVH", err)
    }

  };

  useEffect(() => {
    handleSearch()
  }, [input])


  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };




  return (
    <>

      <header className="home-header">
        <nav style={{ display: "flex" }}>
          <Button style={{ margin: 8,backgroundColor:'white', outlineColor: "black" }} variant="outlined" onClick={(e) => navigate("/JobPostCreate")} >Post a  job</Button>
          <Button style={{ backgroundColor:'white',  left: 1500, margin: 8, outlineColor: "black" }} variant="outlined" onClick={(e) => navigate("/MyJObListing")}  >My Job List</Button>

        </nav>
      </header>


      <div style={{ margin: 80 }} className="home-container">

        <div className="container my-5">
          <div className="row mb-4">

            <div style={{ width: 500 }}>

              <input value={input} onChange={(e) => setinput(e.target.value)} inpu style={{ height: 50 }} type="text" className="form-control" placeholder="Search Skills,title....." />
            </div>
          </div>
          <div className="row">
            <h3 style={{ color: "#223385" }}>Active Candidates</h3>

            {job?.map((user) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={user?.id}>
                  <div className="card custom-card">
                    <img
                      style={{ width: '20%', height: 'auto' }}
                      src={imagePath}
                      className="card-img-top"
                      alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">{truncateText(user?.about, 50)}</p>
                      <Button style={{ outlineColor: "black", bottom: 10 }} variant="outlined" onClick={() => handleNavigate(user)} >View candidates</Button>
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
      </div></>
  );
}

export default CandidateSearch;
