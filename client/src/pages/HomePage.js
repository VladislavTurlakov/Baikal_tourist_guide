import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Добро пожаловать в путеводитель по Байкалу</h1>
      <p>Откройте для себя красоту и уникальность озера Байкал - самого глубокого и древнего озера в мире!</p>
      <img src="/images/baikal_panorama.jpg" alt="Панорама Байкала" style={{width: '100%', borderRadius: '10px'}} />
      <h2>Почему стоит посетить Байкал?</h2>
      <ul>
        <li>Уникальная природа и ландшафты</li>
        <li>Богатое биоразнообразие</li>
        <li>Культурное наследие местных народов</li>
        <li>Возможности для активного отдыха</li>
        <li>Чистейшая вода и воздух</li>
      </ul>
      <Link to="/places">
        <button>Исследовать достопримечательности</button>
      </Link>
    </div>
  );
};

export default HomePage;