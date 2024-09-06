import React from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../features/gameSlice';
import './Username.css';

function Username() {
  const dispatch = useDispatch();
  const [username, setUsernameState] = React.useState('');

  const handleSubmit = () => {
    dispatch(setUsername(username));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsernameState(e.target.value)}
      />
      <button onClick={handleSubmit}>Set Username</button>
    </div>
  );
}

export default Username;
