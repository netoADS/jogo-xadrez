// src/components/MusicPlayer/MusicPlayer.js
import React, { useState, useRef } from 'react';
import './MusicPlayer.css'; // Estilo para MusicPlayer

const MusicPlayer = ({ onSelectMusic, currentMusic }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChangeMusic = (event) => {
    const newMusic = event.target.value;
    onSelectMusic(newMusic);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentMusic} />
      <div className="music-list">
        <button onClick={handleChangeMusic} value="/music/FinalAct.mp3">Final Act</button>
        <button onClick={handleChangeMusic} value="/music/TheRoad.mp3">The Road</button>
        {/* Adicione mais músicas aqui */}
      </div>
    </div>
  );
};

export default MusicPlayer;
