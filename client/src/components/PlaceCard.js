import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.imageUrl} alt={place.name} />
      <h3>{place.name}</h3>
      <p>{place.description}</p>
      <p><strong>Регион:</strong> {place.region}</p>
    </div>
  );
};

export default PlaceCard;