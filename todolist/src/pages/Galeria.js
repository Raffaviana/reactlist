import React, { useState } from 'react';
import './Galeria.css'; // Importa os estilos
import { NavLink } from 'react-router-dom';

const GaleriaImagens = () => {
  const [imagens,] = useState([
    // Adicione URLs de imagens ou caminhos de arquivos locais
    'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
    'https://usemobile.com.br/wp-content/uploads/2022/08/react-native-logo-em-cores-claras.png',
    'https://coodesh.com/blog/wp-content/uploads/2021/10/mobile-react-scaled.jpg',
    // ... outras imagens
  ]);

  return (
    <div className="galeria-container">
      <h2>Galeria de Imagens</h2>
      <div className="galeria-grid">
        {imagens.map((imagem, index) => (
          <div key={index} className="galeria-item">
            <img src={imagem} alt={`Imagem ${index}`} />
          </div>
        ))}
      </div>
      <div className="galeria-link">
        <NavLink to="/home">Inicio</NavLink>
      </div>
    </div>
  );
};

export default GaleriaImagens;