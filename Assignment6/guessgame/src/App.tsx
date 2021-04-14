import React from 'react';
import Game from './components/game';
import GameLogic from './components/gameLogic';

function App() {

  const gameLogic = new GameLogic();

  const handleStartButton = () => {

  }

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
