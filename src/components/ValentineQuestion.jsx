import React, { useState } from 'react';
import MainScreen from './MainScreen';
import './ValentineQuestion.css'; // Nuevo archivo CSS para animaciones

const ValentineQuestion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [answered, setAnswered] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleNoClick = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    setPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true);
    createHearts();
    createFireworks();
  };

  const createHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 50; i++) {
      const heart = {
        id: i,
        style: {
          left: Math.random() * window.innerWidth,
          top: Math.random() * window.innerHeight,
          animationDuration: `${Math.random() * 3 + 2}s`,
        },
      };
      newHearts.push(heart);
    }
    setHearts(newHearts);
  };

  const createFireworks = () => {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'fireworks';
    document.body.appendChild(fireworksContainer);
    setTimeout(() => {
      document.body.removeChild(fireworksContainer);
    }, 5000); // Duración de los fuegos artificiales
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
        <MainScreen />
      )}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={heart.style}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default ValentineQuestion;