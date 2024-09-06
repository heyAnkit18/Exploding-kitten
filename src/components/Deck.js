import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawCard } from '../features/gameSlice';
import './Deck.css';

function Deck() {
  const dispatch = useDispatch();
  const deck = useSelector((state) => state.game.deck);
  const gameStatus = useSelector((state) => state.game.gameStatus);

  return (
    <div>
      <button
        onClick={() => dispatch(drawCard())}
        disabled={gameStatus !== 'playing'}
      >
        Draw Card
      </button>
      <div>
        {deck.length > 0 ? `Cards left: ${deck.length}` : 'No cards left'}
      </div>
    </div>
  );
}

export default Deck;
