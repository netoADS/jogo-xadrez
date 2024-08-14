// src/components/MusicControls/MusicControls.js
import React, { useState, useRef } from 'react';
import './MusicControls.css'; // Estilo para MusicControls

const MusicControls = ({ onPlayPause, onStop, isPlaying }) => {
  const handlePlayPause = () => {
    onPlayPause();
  };

  const handleStop = () => {
    onStop();
  };

  return (
    <div className="music-controls">
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pausar Música' : 'Reproduzir Música'}
      </button>
      <button onClick={handleStop}>Parar Música</button>
    </div>
  );
};

export default MusicControls;
