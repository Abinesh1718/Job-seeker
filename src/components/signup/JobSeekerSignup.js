import { Button } from '@mui/material';
import React, { useState } from 'react';

import { ReactComponent as LoginBack } from '../../assets/images/left-nav.svg';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../homepage.css"
import { JobseekerSignup } from '../../sevices/account';
function JobSeekerSignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skills: '',
    jobTitle: '',
    about: '',
    qualification: '',
    experince: '',
    careerBreak: 'No',
  });

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!Object.values(formData).every(value => value.trim())) {
      return toast.error("Please fill in all the fields.");
    }
  
    const body = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      skills: formData.companyName,
      job_title: formData.description,
      about: formData.about,
      qualification: formData.qualification,
      career_break: formData.careerBreak,
    };
  
    try {
      const createUser = await JobseekerSignup(body);
      console.log("55createUser", createUser);
      if (createUser.status === 200) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate('/JobListing');
        }, 2000);
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error("Signup failed. Please try again later.");
    }
  };
  



  return (
    <div style={{ height: 500, width: 800, padding: 80 }} className="container">
      <h2>Job Seeker Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Job Title:</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>About:</label>
          <textarea name="about" value={formData.about} onChange={handleChange} className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>Qualification:</label>
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Disability:</label>
          <input type="email" name="disability" value={formData.email} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Experinec:</label>
          <input type="text" name="experince" value={formData.experince} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Career Break:</label>
          <div className="form-check">
            <input type="radio" name="careerBreak" value="Yes" checked={formData.careerBreak === 'Yes'} onChange={handleChange} className="form-check-input" />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input type="radio" name="careerBreak" value="No" checked={formData.careerBreak === 'No'} onChange={handleChange} className="form-check-input" />
            <label className="form-check-label">No</label>
          </div>
        </div>
        <Button type="submit" style={{ display: 'flex', outlineColor: "black", left: 400, width: 300, margin: 30 }} variant="outlined">Submit </Button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default JobSeekerSignupForm;
