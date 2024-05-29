// ImagemDescricao.tsx
import React from 'react';

interface ImagemDescricaoProps {
  src: string;
  alt: string;
  description: string;
}

const ImagemDescricao: React.FC<ImagemDescricaoProps> = ({ src, alt, description }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" />
      <p className="description">{description}</p>
    </div>
  );
};

export default ImagemDescricao;