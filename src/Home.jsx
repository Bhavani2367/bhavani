import React from 'react';
import './Home.css'; // Include a CSS file for styling

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <div className="home-content">
        {/* Image Section */}
        <div className="home-image">
          <img 
            src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/66a56d3bc890de5bbc0e407e_60bdcf18caffb600e9c53455_Frame%25201.webp" 
            alt="Home" 
            className="responsive-image" 
          />
        </div>

        {/* Introductory Text */}
        <div className="home-text">
          <p>
            Discover the world of innovation, creativity, and inspiration at our website. 
            We are passionate about delivering top-notch solutions and creating value for our customers.
          </p>
          <p>
            Explore our services, learn more about what we do, and join our community. 
            Together, let's build a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
