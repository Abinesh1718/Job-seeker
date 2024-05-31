// ./components/HomePage.js
import React from 'react';
import './homepage.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav>
          <ul>
            <li><a href="/EmployerLogin?roles=jobseeker">Job Seekers</a></li>
            <li><Link to="/EmployerLogin?roles=emp">Employers</Link></li>
          </ul>
        </nav>
      </header>
      <div className="home-content">
        <div className="job-search-section" style={{ fontSize: 13 }}>
          <h1>Find Your Dream Job  <a   href="/EmployerLogin?roles=jobseeker">click here</a></h1>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
