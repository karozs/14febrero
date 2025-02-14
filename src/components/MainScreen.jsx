import React, { useState, useEffect } from "react";
import { FaMusic, FaGift, FaHeart, FaQuoteLeft, FaFeatherAlt } from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import Gifts from "./Gifts";
import Phrases from "./Phrases";
import Poems from "./Poems";
import "./MainScreen.css"; // Asegúrate de importar los estilos
import profileImage from "../assets/profile.jpg"; // Importa la imagen

const MainScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hearts, setHearts] = useState([]);

  // Generar corazones flotantes
  useEffect(() => {
    const createHearts = () => {
      let newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 5 + 5 + "s",
        });
      }
      setHearts(newHearts);
    };
    createHearts();
  }, []);

  return (
    <div className="main-screen">
      {/* Imagen circular */}
      <img src={profileImage} alt="Foto especial" className="profile-image" />

      {/* Corazones flotando */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
          }}
        />
      ))}

      {/* Título principal */}
      <h1 className="main-title">💖 ¡Feliz 14 de Febrero! 💖</h1>

      {/* Frase especial para la mejor enfermera */}
      <p className="nurse-message">
        👩‍⚕️ Eres la luz que sana con amor, la sonrisa que calma y el corazón que late por ayudar.  
        ¡Gracias por ser la mejor enfermera y mi gran amor! 💕
      </p>

      {/* Botones de opciones */}
      <div className="options-container">
        <button onClick={() => setSelectedOption("music")} className="option-button">
          <FaMusic className="icon" /> Música
        </button>
        <button onClick={() => setSelectedOption("gifts")} className="option-button">
          <FaGift className="icon" /> Regalos
        </button>
        <button onClick={() => setSelectedOption("phrases")} className="option-button">
          <FaQuoteLeft className="icon" /> Frases
        </button>
        <button onClick={() => setSelectedOption("poems")} className="option-button">
          <FaFeatherAlt className="icon" /> Poemas
        </button>
      </div>

      {/* Mostrar contenido según la opción seleccionada */}
      {selectedOption === "music" && <MusicPlayer />}
      {selectedOption === "gifts" && <Gifts />}
      {selectedOption === "phrases" && <Phrases />}
      {selectedOption === "poems" && <Poems />}
    </div>
  );
};

export default MainScreen;
