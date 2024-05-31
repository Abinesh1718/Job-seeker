import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PostJob } from '../sevices/account';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function JobPostCreateForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    skills: '',
    description: '',
    salary: '',
    qualification: '',
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

    console.log("JNJNNNNJ", formData.length);
    const body = {
      jobTitle: formData.jobTitle,
      skills: formData.skills,
      description: formData.description,
      salary: formData.salary,
      qualification: formData.qualification
    }


    try {
      const PostJobData = await PostJob(body)
      console.log("BBHBBHBH", PostJobData);
      if (PostJobData.status == 200) {
        toast.success("Job created successfully!");
        setTimeout(() => {
          navigate("/MyJObListing");
        }, 2000);
      }

    } catch (error) {
      toast.error("JOb created failed. Please try again later.");
      console.log(error)

    }



  };

  return (
    <div style={{ padding: 80, height: 500, width: 800 }} className="container">
      <h2  style={{ color: "#223385" }} >Create Job Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title:</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Qualification:</label>
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="form-control" />
        </div>
        <Button type="submit" style={{ display: 'flex', outlineColor: "black", left: 400, width: 300, margin: 30 }} variant="outlined">Submit</Button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default JobPostCreateForm;
