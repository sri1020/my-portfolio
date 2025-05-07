import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Smart Mortgage Loan System</h3>
        <p>Developed at First Citizens Bank to manage and automate loan processes using React and Java backend.</p>
      </div>
      <div className="project-card">
        <h3>E-commerce App</h3>
        <p>Built a full-stack app with product listing, cart, and payment using React and Stripe API.</p>
      </div>
    </section>
  );
};

export default Projects;
