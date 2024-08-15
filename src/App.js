import React, { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // Ajuste o caminho conforme necessário
import MusicSidebar from './components/MusicSidebar/MusicSidebar';
import Board from './components/Board/Board';
import './App.css';

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      {/* Botão de alternância de tema */}
      <button className="theme-switcher" onClick={toggleTheme}>
        Alternar Tema
      </button>

      <MusicSidebar />
      <div className="main-content">
        <Board />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
