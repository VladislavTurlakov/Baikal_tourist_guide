import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAdmin, onLogout }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/places">Достопримечательности</Link></li>
            <li><Link to="/about">О Байкале и разработчиках</Link></li>
            {isAdmin && <li><Link to="/admin">Админ панель</Link></li>}
            {isAdmin ? (
              <li><button onClick={onLogout}>Выйти</button></li>
            ) : (
              <li><Link to="/login">Войти</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;