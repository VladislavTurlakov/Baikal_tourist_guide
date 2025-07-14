import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({ name: '', description: '', region: '', image_url: '' });

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/places');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlaces(data);
    } catch (error) {
      console.error('Error fetching places:', error);
      setPlaces([]); // Установите пустой массив в случае ошибки
    }
  };

  const handleInputChange = (e) => {
    setNewPlace({ ...newPlace, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/places', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlace),
      });
      if (response.ok) {
        fetchPlaces();
        setNewPlace({ name: '', description: '', region: '', image_url: '' });
      }
    } catch (error) {
      console.error('Error adding place:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/places/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchPlaces();
      }
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  };

  return (
    <div className="container">
      <h1>Админ панель</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newPlace.name}
          onChange={handleInputChange}
          placeholder="Название"
          required
        />
        <textarea
          name="description"
          value={newPlace.description}
          onChange={handleInputChange}
          placeholder="Описание"
          required
        ></textarea>
        <input
          type="text"
          name="region"
          value={newPlace.region}
          onChange={handleInputChange}
          placeholder="Регион"
          required
        />
        <input
          type="text"
          name="image_url"
          value={newPlace.image_url}
          onChange={handleInputChange}
          placeholder="URL изображения"
          required
        />
        <button type="submit">Добавить место</button>
      </form>
      <h2>Список мест</h2>
      {Array.isArray(places) && places.length > 0 ? (
        <ul>
          {places.map(place => (
            <li key={place.id}>
              {place.name} - {place.region}
              <button onClick={() => handleDelete(place.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет доступных мест</p>
      )}
    </div>
  );
};

export default AdminPage;