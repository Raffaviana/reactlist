import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authStore from '../authStore';
import './Cadastro.css'; // Importa os estilos

const Cadastro = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const getSubmit = async (e) => {
    e.preventDefault();
    try {
      await authStore.register(userData);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form>
      <div className="cadastro-container">
        <h2 className="cadastro-title">Cadastro</h2>
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          className="cadastro-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={userData.password}
          onChange={(e) => setUserData({...userData, password: e.target.value})}
          className="cadastro-input"
        />
        <button type='submit' onClick={getSubmit} className="cadastro-button">
          Cadastrar
        </button>
        <div className="cadastro-link">
          <NavLink to="/">Voltar</NavLink>
        </div>
      </div>
    </form>
  );
};

export default Cadastro;
