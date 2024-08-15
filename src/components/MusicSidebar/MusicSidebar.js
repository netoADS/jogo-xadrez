// src/components/MusicSidebar/MusicSidebar.js
import React, { useState } from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import MusicControls from '../MusicControls/MusicControls';
import './MusicSidebar.css'; // Estilo para MusicSidebar

const MusicSidebar = () => {
  const [currentMusic, setCurrentMusic] = useState('/music/FinalAct.mp3');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectMusic = (newMusic) => {
    setCurrentMusic(newMusic);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleStop = () => {
    setCurrentMusic('/music/FinalAct.mp3');
    setIsPlaying(false);
  };

  return (
    <div className="music-sidebar">
      <MusicPlayer onSelectMusic={handleSelectMusic} currentMusic={currentMusic} />
    </div>
  );
};

export default MusicSidebar;
