import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'; // Importa os estilos

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Bem-vindo à Página Inicial</h2>
      <p className="home-text">
        Esta é uma página React simples. Você pode adicionar mais componentes e funcionalidades
        conforme necessário.
      </p>
      <p className="home-text">Explore o aplicativo e divirta-se!</p>
      <div className="home-links">
        <NavLink to="/lista" className="home-link">
          Lista
        </NavLink>
        <NavLink to="/galeria" className="home-link">
          Galeria
        </NavLink>
        <NavLink to="/" className="home-link">
          Sair
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
