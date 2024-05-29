

import React from 'react';
import ImagemDescricao from './ImagemDescrição';
import './style.css';

const FormSessao2: React.FC = () => {
  const images = [
    { src: 'https://compasshenrique.s3.amazonaws.com/card+image.jpg', alt: 'hero1', description: 'Descrição 1' },
    { src: 'https://compasshenrique.s3.amazonaws.com/card+image+(1).jpg', alt: 'hero2', description: 'Descrição 2' },
    { src: 'https://compasshenrique.s3.amazonaws.com/card+image+(2).jpg', alt: 'hero2', description: 'Descrição 2' },
    { src: 'https://compasshenrique.s3.amazonaws.com/card+image+(3).jpg', alt: 'hero2', description: 'Descrição 2' }
  ];

  return (
    <div className="background">
      <div><h3>Why should you ride with us?</h3></div>
        <div><h1>Best in class rides</h1></div>
        <div className="container">
          {images.map((image, index) => (
            <ImagemDescricao
              key={index}
              src={image.src}
              alt={image.alt}
              description={image.description}
            />
        ))}
      </div>
    </div>
  );
};

export default FormSessao2;