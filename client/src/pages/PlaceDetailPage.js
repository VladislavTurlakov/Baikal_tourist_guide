import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlaceDetailPage = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPlace();
  }, [id]);

  const fetchPlace = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/places/${id}`);
      const data = await response.json();
      setPlace(data);
    } catch (error) {
      console.error('Error fetching place:', error);
    }
  };

  if (!place) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{place.name}</h1>
      <img src={place.image_url} alt={place.name} style={{maxWidth: '100%', borderRadius: '10px'}} />
      <p><strong>Регион:</strong> {place.region}</p>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetailPage;