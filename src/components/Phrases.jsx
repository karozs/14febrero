import React from "react";
import "./Phrases.css"; // Asegúrate de importar los estilos

const Phrases = () => {
  const phrases = [
    "💖 Eres mi razón de ser, mi luz en la oscuridad. Cada momento a tu lado es un regalo del universo.",
    "✨ En tus ojos encuentro el cielo, en tu sonrisa, mi consuelo. Eres mi todo.",
    "💫 El amor no es solo mirarse el uno al otro, es mirar juntos en la misma dirección.",
    "🌹 Si tuviera que elegir entre amarte y respirar, usaría mi último aliento para decirte: te amo.",
    "🔥 Eres el latido en mi pecho, el susurro del viento que me dice que el amor verdadero existe.",
    "🌙 Eres el único sueño del que nunca quiero despertar, la eternidad que quiero vivir a tu lado.",
  ];

  return (
    <div className="phrases-container">
      <h2 className="phrases-title">💌 Frases Románticas para la mejor Enamorada del mundo 💌</h2>
      <div className="phrases-box">
        {phrases.map((phrase, index) => (
          <p key={index} className="phrase">{phrase}</p>
        ))}
      </div>
    </div>
  );
};

export default Phrases;
