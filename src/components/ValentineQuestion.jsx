import React, { useState } from 'react';
import MainScreen from './MainScreen';

const ValentineQuestion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [answered, setAnswered] = useState(false);

  const handleNoClick = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    setPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true); // Cambia el estado a true
  };

  return (
    <div className="valentine-container">
      {!answered ? (
        <>
          <h1 className="valentine-title">¿Quieres pasar el 14 de febrero conmigo?</h1>
          <div className="button-container">
            <button
              onClick={handleYesClick}
              className="valentine-button yes-button"
            >
              Sí
            </button>
            <button
              style={{ position: 'absolute', left: position.x, top: position.y }}
              onClick={handleNoClick}
              className="valentine-button no-button"
            >
              No
            </button>
          </div>
        </>
      ) : (
        <MainScreen /> // Renderiza MainScreen cuando answered es true
      )}
    </div>
  );
};

export default ValentineQuestion;