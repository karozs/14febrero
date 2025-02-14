import React from 'react';

const Phrases = () => {
  const phrases = [
    "Eres mi razón de ser, mi luz en la oscuridad. Cada momento a tu lado es un regalo del universo.",
    "En tus ojos encuentro el cielo, en tu sonrisa, mi consuelo. Eres mi todo.",
    "El amor no es solo mirarse el uno al otro, es mirar juntos en la misma dirección.",
  ];

  return (
    <div className="phrases">
      <h2>Frases Románticas</h2>
      {phrases.map((phrase, index) => (
        <p key={index} className="phrase">
          {phrase}
        </p>
      ))}
    </div>
  );
};

export default Phrases;