import React, { useState } from "react";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const musicList = [
    { name: "Canción 1 (YouTube)", url: "ue0RP3C1Brg" },
    { name: "Canción 2 (MP3)", url: "TYrcdhots80" },
    { name: "Canción 3 (MP3)", url: "Mxpy1CyXr6Q" },
  ];

  const [currentSong, setCurrentSong] = useState(musicList[0].url);
  const [isYouTube, setIsYouTube] = useState(true);

  const opts = {
    height: "200",
    width: "350",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎶 Cada nota de esta canción susurra lo mucho que te amo... 💖🎶</h2>

      <div style={styles.playerContainer}>
        {isYouTube ? (
          <YouTube videoId={currentSong} opts={opts} />
        ) : (
          <audio controls autoPlay style={styles.audio}>
            <source src={currentSong} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
      </div>

      <div style={styles.buttonContainer}>
        {musicList.map((song, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSong(song.url);
              setIsYouTube(song.url.length === 11);
            }}
            style={styles.button}
          >
            {song.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#333",
    fontSize: "22px",
    marginBottom: "15px",
  },
  playerContainer: {
    background: "white",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  audio: {
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: "5px 0",
    padding: "10px 15px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
};

export default MusicPlayer;

