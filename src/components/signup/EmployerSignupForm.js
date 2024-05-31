import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as LoginBack } from '../../assets/images/left-nav.svg';
import { EmployerSignup } from '../../sevices/account';

function EmployerSignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    companyName: '',
    description: '',
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
      username: formData.username,
      email: formData.email,
      password: formData.password,
      companyName: formData.companyName,
      description: formData.description
    }
    try {
      const createUser = await EmployerSignup(body);
      console.log("55createUser", createUser);
      if (createUser.status == 200) {
        toast.success("Signup successful!");
        setTimeout(() => {
          navigate('/candidates');
        }, 2000);
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error("Signup failed. Please try again later.");
    }

  };

  return (
    <div style={{ height: 500, width: 800, padding: 80 }} className="container">
      <h2 style={{ color: "#223385" }}>Employer Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" />
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
          <label>Company Name:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="form-control"></textarea>
        </div>
        <Button type="submit" style={{ display: 'flex', outlineColor: "black", left: 400, width: 300, margin: 30 }} variant="outlined">Submit</Button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EmployerSignupForm;
