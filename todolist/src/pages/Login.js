import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import authStore from '../authStore';
import './Login.css'; // Importa os estilos

const Login = ( ) => {
  const [ loginData, setLoginData ] = useState({ email: '', password: ''});
  const navigate = useNavigate();

  const getLogin = async (e) => {
    e.preventDefault();
      try {
          await authStore.login(loginData, navigate);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <form onSubmit={getLogin}>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={loginData.password}
          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
          className="login-input"
        />
        <button type='submit' className="login-button">
          Entrar
        </button>
        <div className="login-link">
          <NavLink to="/cadastro">Cadastro</NavLink>
        </div>
      </div>
    </form>
  );
};

export default Login;
