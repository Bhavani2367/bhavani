import React from 'react';
import './ContactUs.css'; // Add this for custom styling

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-us-content">
        {/* Image Section */}
        <div className="contact-us-image">
          <img 
            src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" 
            alt="Contact Us" 
            className="responsive-image" 
          />
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>We'd love to hear from you!</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
