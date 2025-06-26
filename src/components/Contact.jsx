import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Message Sent! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Contact Me</motion.h2>

      <motion.div className="contact-container" variants={itemVariants}>
        {/* Contact Form */}
        <motion.div className="contact-form" variants={itemVariants}>
          <h3>Send Me a Message!</h3>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Hidden input required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot for spam protection */}
            <input type="hidden" name="bot-field" />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="social-links"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={listVariants}
      >
        <h3>Follow Me</h3>
        <motion.ul variants={listVariants} className="social-list">
          <motion.li variants={itemVariants}>
            <a
              href="https://github.com/strawbunnyexe"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a
              href="https://linkedin.com/in/jennifer-pichardo"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a
              href="https://strawbunnyexe.itch.io/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Itch.io"
            >
              <i className="fa-brands fa-itch-io"></i> Itch.io
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>

    </motion.div>
    </motion.section >
  );
};

export default Contact;

