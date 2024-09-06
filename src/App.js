import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from './features/gameSlice';
import Username from './components/Username';
import Deck from './components/Deck';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.game.gameStatus);

  return (
    <div className="App">
      <h1>Exploding Kitten</h1>
      <Username />
      {gameStatus === 'idle' && (
        <button onClick={() => dispatch(startGame())}>Start Game</button>
      )}
      {gameStatus === 'playing' && <Deck />}
      <Leaderboard />
    </div>
  );
}

export default App;


