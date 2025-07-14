import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (token, role) => {
    setToken(token);
    setIsAdmin(role === 'admin');
  };

  const handleLogout = () => {
    setToken(null);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isAdmin={isAdmin} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/place/:id" element={<PlaceDetailPage />} />
            {isAdmin && <Route path="/admin" element={<AdminPage />} />}
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;