import React from 'react';
import TourCard from '../components/TourCard';

const Tours = () => {
    const tours = [
        {
            id: 1,
            title: 'City Tour',
            description: 'Explore the city with our guided tour.',
            image: 'path/to/city-tour-image.jpg',
            link: '/tours/city-tour'
        },
        {
            id: 2,
            title: 'Nature Adventure',
            description: 'Experience the beauty of nature on this adventure.',
            image: 'path/to/nature-adventure-image.jpg',
            link: '/tours/nature-adventure'
        },
        {
            id: 3,
            title: 'Cultural Experience',
            description: 'Immerse yourself in the local culture with this tour.',
            image: 'path/to/cultural-experience-image.jpg',
            link: '/tours/cultural-experience'
        }
    ];

    return (
        <div className="tours-page">
            <h1>Available Tours</h1>
            <div className="tours-list">
                {tours.map(tour => (
                    <TourCard 
                        key={tour.id} 
                        title={tour.title} 
                        description={tour.description} 
                        image={tour.image} 
                        link={tour.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Tours;