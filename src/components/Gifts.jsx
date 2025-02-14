import React, { useState } from 'react';

const Gifts = () => {
  const [selectedGift, setSelectedGift] = useState(null);

  const handleGiftClick = (gift) => {
    setSelectedGift(gift);
    setTimeout(() => setSelectedGift(null), 4000);
  };

  return (
    <div className="gifts">
      <h2 className="gifts-title">🎁 Elige un Regalo 🎁</h2>
      <ul className="gifts-list">
        <li className="gift-item" onClick={() => handleGiftClick("flores")}>💐 Flores</li>
        <li className="gift-item" onClick={() => handleGiftClick("chocolates")}>🍫 Chocolates</li>
        <li className="gift-item" onClick={() => handleGiftClick("libro")}>📚 Libro</li>
        <li className="gift-item" onClick={() => handleGiftClick("sorpresa")}>🎁 Caja Sorpresa</li>
      </ul>

      {selectedGift && (
        <div className="rain-container">
          {Array.from({ length: 30 }).map((_, index) => (
            <span 
              key={index} 
              className="rain-drop"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {selectedGift === "flores" && "🌹"}
              {selectedGift === "chocolates" && "🍫"}
              {selectedGift === "libro" && "📖"}
              {selectedGift === "sorpresa" && "🎊"}
            </span>
          ))}
        </div>
      )}

      <style jsx>{`
        .gifts {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #ff7eb3, #ff758c);
          border-radius: 15px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          min-height: 400px;
        }

        .gifts-title {
          font-size: 2rem;
          color: #fff;
          font-weight: bold;
          margin-bottom: 15px;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          animation: glow 2s infinite alternate;
        }

        .gifts-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          position: relative;
          z-index: 2;
        }

        .gift-item {
          background: rgba(255, 255, 255, 0.9);
          padding: 15px 25px;
          border-radius: 12px;
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          max-width: 250px;
          text-align: center;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .gift-item:hover {
          box-shadow: 0px 6px 20px rgba(255, 165, 0, 0.5);
          transform: scale(1.05);
        }

        .rain-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .rain-drop {
          position: absolute;
          font-size: 2rem;
          animation: rain 2s linear infinite;
          opacity: 0;
        }

        @keyframes rain {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
          }
          to {
            text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Gifts;