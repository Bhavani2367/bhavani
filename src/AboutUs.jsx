import React from 'react';
import './AboutUs.css'; // Include a CSS file for styling

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-us-content">
        {/* Image Section */}
        <div className="about-us-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZnGvf0-R0G_IGcE9cIICBTLp9UezwKOpwA&s" 
            alt="About Us" 
            className="responsive-image" 
          />
        </div>

        {/* Description Section */}
        <div className="about-us-text">
          <p>
            Welcome to our company! We are dedicated to delivering the best services and products to our customers. 
            Our mission is to innovate and inspire, ensuring satisfaction and excellence in everything we do.
          </p>
          <p>
            With years of experience and a passionate team, we strive to create solutions that make a difference. 
            Join us on our journey as we continue to grow and achieve great things together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
