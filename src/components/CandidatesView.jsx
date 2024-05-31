import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import { ReactComponent as LoginBack } from '../assets/images/left-nav.svg';
import { useNavigate } from 'react-router-dom';

function CandidatesView() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState("")

  const queryParams = new URLSearchParams(window.location.search);
  const user = queryParams.get('user');



  const getData = () => {
    const userData = JSON.parse(decodeURIComponent(user));
    console.log(userData);
    setuserData(userData)

  }


  useEffect(() => {
    user && getData()
  }, [user])


  console.log("JJJJJJ", user);

  const handleGoBack = () => {
    navigate(-1);
  };


  const handlechange = () => {
    navigate("/candidates")
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
      <Button className='loginBackBtn' onClick={handleGoBack} style={{ backgroundColor: 'rgb(245, 250, 255)', padding: 50 }}>
        <LoginBack />
        <span>Back</span>
      </Button>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card candidate-card">
              {/* <Button onClick={handlechange} style={{ display: 'flex', outlineColor: "black", left: 400, width: 300, margin: 30 }} variant="outlined">Accept </Button> */}
              <div className="card-body text-center">
                <img height={300} width={300} src={require('../assets/images/user1.png')} className="candidate-photo" alt="Candidate Photo" />
                <h2 className="card-title">{userData.name}</h2>
                <hr />
                <h5 className="card-subtitle">Email :</h5>
                <p className="card-text">{userData.email}</p>
                <hr />

                <h5 className="card-subtitle">Work Experience :</h5>
                <p className="card-text">{userData.experince}</p>
                <hr />
                <h5 className="card-subtitle mb-2">Education Qualification :</h5>
                <p className="card-text">{userData.qualification}</p>
                <hr />
                <h5 className="card-subtitle mb-2">Career Break :</h5>
                <p className="card-text">{userData.career_break ? "Yes" : "No"}</p>
                <hr />
                <h5 className="card-subtitle mb-2">Skills :</h5>

                {userData.skills && userData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidatesView;
