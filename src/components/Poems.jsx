import React, { useState } from "react";
import "./Poems.css";

const Poems = () => {
  const poems = [
    `En tus ojos encuentro el cielo,
     en tu sonrisa, mi consuelo.
     En tu amor, mi razón de ser,
     contigo quiero siempre crecer.`,

    `El amor es como el viento,
     no puedes verlo, pero puedes sentirlo.
     Y en cada latido de mi corazón,
     sé que eres tú quien lo hace palpitar.`,

    `Eres la melodía que da vida a mi alma,
     la luz que ilumina mis días sin calma.
     En cada suspiro, en cada mirada,
     sé que mi destino es tu alma enamorada.`,

    `Si tuviera que elegir entre mi vida y amarte,
     usaría mi último aliento para decirte "te amo".
     Porque sin ti, la luna no brilla,
     y el tiempo se detiene en un abrazo eterno.`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPoem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? poems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="poems">
      <h2 className="poems-title">🌹 Poemas de Amor 💖</h2>
      
      <div className="poem-slider">
        <button className="slider-btn left" onClick={prevPoem}>
          ❮
        </button>
        <pre className="poem fade-in">{poems[currentIndex]}</pre>
        <button className="slider-btn right" onClick={nextPoem}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Poems;
