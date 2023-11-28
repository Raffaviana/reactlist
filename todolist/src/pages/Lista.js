import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Lista.css'; // Importa os estilos

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({ nome: '' });

  const adicionarUsuario = () => {
    // Adicionar um novo usuário à lista
    setUsuarios([...usuarios, { id: usuarios.length + 1, ...novoUsuario }]);
    // Limpar os campos do formulário
    setNovoUsuario({ nome: '' });
  };

  const editarUsuario = (id, novoNome) => {
    // Editar um usuário na lista
    setUsuarios(
      usuarios.map((usuario) =>
        usuario.id === id ? { ...usuario, nome: novoNome } : usuario
      )
    );
  };

  const excluirUsuario = (id) => {
    // Excluir um usuário da lista
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div className="lista-container">
      <h2 className="lista-title">Lista de Nomes</h2>
      <ul className="lista-ul">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="lista-li">
            {usuario.nome}
            <div className="lista-buttons">
              <button onClick={() => editarUsuario(usuario.id, 'NovoNome')}>Editar</button>
              <button onClick={() => excluirUsuario(usuario.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Adicionar Nomes</h3>
      <div className="lista-li">
        <input
          type="text"
          placeholder="Nome"
          value={novoUsuario.nome}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
          className="lista-input"
        />
        <button onClick={adicionarUsuario} className="lista-button">
          Adicionar
        </button>
      </div>

      <div className="lista-link">
        <NavLink to="/home">Inicio</NavLink>
      </div>
    </div>
  );
};

export default ListaUsuarios;
