import React from 'react';
import { useSelector } from 'react-redux';
import './Leaderboard.css';

function Leaderboard() {
  const leaderboard = useSelector((state) => state.leaderboard.leaderboard);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>{`${entry.username}: ${entry.points} points`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
