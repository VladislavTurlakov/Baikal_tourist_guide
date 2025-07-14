import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, region });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Поиск по названию"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">Все регионы</option>
        <option value="Иркутская область">Иркутская область</option>
        <option value="Бурятия">Бурятия</option>
        <option value="Забайкальский край">Забайкальский край</option>
      </select>
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchForm;