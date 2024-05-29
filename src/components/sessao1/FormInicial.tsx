

import React, { useState } from 'react';
import './style.css';

const FormInicial: React.FC = () => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="background">
    <div className="container">
      <div className="image-container">
        <img src="https://compasshenrique.s3.amazonaws.com/Hero+image.svg" alt="hero" />
      </div>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="location">Localização:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destino:</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <button type="submit">Find a Drive</button>
        </form>
      </div>
    </div>
    </div>
  );
};


export default FormInicial;