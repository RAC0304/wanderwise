import React from 'react';

const TourCard = ({ tour }) => {
    return (
        <div className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <h3 className="tour-title">{tour.title}</h3>
            <p className="tour-description">{tour.description}</p>
            <a href={tour.link} className="tour-link">Learn More</a>
        </div>
    );
};

export default TourCard;