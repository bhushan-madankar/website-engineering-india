import React from 'react';
import './EventsPage.css';
import heroImage from './assets/event.jpg.avif';
import eiImage from './assets/eiimage.jpg';
import rashtrImage from './assets/rashtr.JPG';
import chikhalImage from './assets/chikhal.jpg';
import shivajiImage from './assets/shivaji.jpg';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Abhyudaya 24.0",
      description: "Abhyudaya 24.0, the annual flagship event organized by Engineering India, was successfully conducted on 29th September 2024. ",
      image: eiImage
    },
    {
      id: 2,
      title: "Rashtrabhiman – Celebrating the Spirit of the Nation",
      description: "Held on 26th January, Rashtrabhiman was a patriotic and cultural event organized by the Engineering India Club to commemorate Republic Day and honor the spirit of unity, integrity, and national pride.",
      image: rashtrImage
    },
    {
      id: 3,
      title: " Fun Trip – A Day to Unwind and Explore",
      description: "Our Club organized a memorable Fun Trip filled with laughter, bonding, and adventure.It was the perfect blend of relaxation and fun, strengthening camaraderie and team spirit.",
      image: chikhalImage
    },
    {
      id: 4,
      title: " Shivoham – Honouring the Legacy of Chhatrapati Shivaji Maharaj",
      description: " Students actively participated in narrating Shivaji Maharaj's journey, highlighting his unmatched contribution to Indian history.",
      image: shivajiImage
    },
    {
      id: 5,
      title: "Robotics Competition",
      description: "Annual robotics competition where teams build autonomous robots to complete various challenges and tasks.",
      image: rashtrImage // reused image
    },
    {
      id: 6,
      title: "Research Symposium",
      description: "Students and faculty present their research findings and innovative solutions to real-world engineering problems.",
      image: eiImage // reused image
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Events</h1>
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <p className="description-text">
          Engineering India Club events are developing and providing new opportunities to learn and empowers the youth to "think nationally and act locally" driving innovation, leadership, and meaningful impact within our communities and beyond.
        </p>
      </div>

      {/* Events Grid */}
      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <button
                  className="learn-more-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

