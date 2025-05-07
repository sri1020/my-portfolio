import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Email: you@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">yourname</a></p>
      <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">yourgithub</a></p>
    </section>
  );
};

export default Contact;
