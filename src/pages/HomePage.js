import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <motion.div
        className="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
      </motion.div>
      <div className="home-content">
        <h1>Welcome to NoteSync</h1>
        <p>This is a simple application to manage your notes efficiently.</p>
        <p>Features:</p>
        <ul>
          <li>Create and edit notes</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
