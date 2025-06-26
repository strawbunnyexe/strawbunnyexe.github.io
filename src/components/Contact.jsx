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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <motion.h3 variants={itemVariants}>Send Me a Message!</motion.h3>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Netlify Hidden Fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <motion.label htmlFor="name" variants={itemVariants}>Name</motion.label>
            <motion.input
              variants={itemVariants}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />

            <motion.label htmlFor="email" variants={itemVariants}>Email</motion.label>
            <motion.input
              variants={itemVariants}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />

            <motion.label htmlFor="message" variants={itemVariants}>Message</motion.label>
            <motion.textarea
              variants={itemVariants}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></motion.textarea>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {statusMessage && (
            <motion.p className="status-message" variants={itemVariants}>
              {statusMessage}
            </motion.p>
          )}
        </div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants}>Follow Me</motion.h3>
          <ul className="social-list">
            <motion.li variants={itemVariants}>
              <a
                href="https://github.com/strawbunnyexe"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <i className="fa-brands fa-itch-io"></i> Itch.io
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Hidden static form to ensure Netlify detects it */}
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>
    </motion.section>
  );
};

export default Contact;
