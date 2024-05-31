import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Employers from './components/CandidatesView';

import JobListing from './components/JobListing';
// import JobSearch from './components/JobSearch';
import CandidateSearch from './components/CandidateSearch';
import EmployerLogin from './components/login';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import JobView from './components/JobView';
import CandidatesView from './components/CandidatesView';
import JobSeekerSignupForm from './components/signup/JobSeekerSignup';
import EmployerSignupForm from './components/signup/EmployerSignupForm';
import JobPostCreateForm from './components/postJob';
import MyJObListing from './components/MyjobLIst';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/JobListing" element={<JobListing />} />
        <Route path="/candidates" element={<CandidateSearch />} />
        <Route path="/EmployerLogin" element={<EmployerLogin />} />
        <Route path="/jobview" element={<JobView />} />
        <Route path="/candidatesview" element={<CandidatesView />} />
        <Route path="/JobSeekerSignup" element={<JobSeekerSignupForm />} />
        <Route path="/EmployerSignup" element={<EmployerSignupForm />} />
        <Route path="/JobPostCreate" element={<JobPostCreateForm />} />
        <Route path="/MyJObListing" element={<MyJObListing />} />


        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
