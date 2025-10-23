import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">Welcome to Paradise Nursery</h1>
          <p className="landing-description">
            Discover the perfect houseplants to transform your space into a green oasis. 
            From low-light lovers to sun-seeking beauties, we have the perfect plant 
            for every corner of your home. Start your plant journey with us today!
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
