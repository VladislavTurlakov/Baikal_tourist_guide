import React, { useState } from 'react';
import { places } from '../data/places';
import PlaceCard from '../components/PlaceCard';
import SearchForm from '../components/SearchForm';

const PlacesPage = () => {
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const handleSearch = ({ searchTerm, region }) => {
    const filtered = places.filter(place =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region === '' || place.region === region)
    );
    setFilteredPlaces(filtered);
  };

  return (
    <div className="container">
      <h1>Достопримечательности Байкала</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="places-grid">
        {filteredPlaces.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;