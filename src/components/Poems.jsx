import React from 'react';
import './Poems.css';

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

  return (
    <div className="poems">
      <h2 className="poems-title">🌹 Poemas de Amor 💖</h2>
      <div className="poem-container">
        {poems.map((poem, index) => (
          <pre key={index} className="poem fade-in">
            {poem}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Poems;
