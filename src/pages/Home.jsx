import React from 'react';
import '../assets/styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My React App</h1>
      <p>This is a simple React application with a navigation bar and home page.</p>
      <div className="home-btns">
        <button className="btn">Get Started</button>
        <button className="btn outline">Learn More</button>
      </div>
    </div>
  );
};

export default Home;