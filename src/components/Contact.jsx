import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"

const Contact = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .sendForm(
        'service_1r18bwl',      // Service ID from EmailJS
        'template_pzrejlk',     // Template ID from EmailJS
        e.target,               // The form element
        'tqp1z2SU-B3eK9bVt'          // User ID from EmailJS
      )
      .then(
        (result) => {
          setStatusMessage('Message Sent Successfully!');
          // Clear form data
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setStatusMessage('Error sending message. Please try again.');
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-form">
          <h3>Send me a Message!</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
        <div className="social-links">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="https://github.com/strawbunnyexe" target="_blank" className="social-icon">GitHub</a></li>
            <li><a href="https://linkedin.com/in/jennifer-pichardo" target="_blank" className="social-icon">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
