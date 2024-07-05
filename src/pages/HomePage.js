import React from 'react';
import Slider from 'react-slick';
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" className="carousel-image"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 2" className="carousel-image"/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 3" className="carousel-image"/>
          <div className="carousel-text">Organize your notes easily</div>
        </div>
      </Slider>
      <div className="home-content">
        <h1>Welcome to NoteSync</h1>
        <p>Manage your notes efficiently and easily.</p>
        <Button variant="primary" className="cta-button">Create a note</Button>
        <Button variant="secondary" className="cta-button">See notes</Button>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="icon icon-notes"></i>
            <h3>Create Notes</h3>
            <p>Write and save your ideas quickly.</p>
          </div>
          <div className="feature-card">
            <i className="icon icon-organize"></i>
            <h3>Organize</h3>
            <p>Categorize and order your notes efficiently.</p>
          </div>
          <div className="feature-card">
            <i className="icon icon-share"></i>
            <h3>Share</h3>
            <p>Share your notes with friends and colleagues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
