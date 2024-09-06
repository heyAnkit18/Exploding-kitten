import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deck: [],
  gameStatus: 'idle', // 'playing', 'won', 'lost'
  user: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.deck = ['cat', 'defuse', 'shuffle', 'explodingKitten', 'cat'].sort(() => Math.random() - 0.5);
      state.gameStatus = 'playing';
    },
    drawCard: (state) => {
      if (state.deck.length === 0) return;
      const card = state.deck.shift();
      switch (card) {
        case 'cat':
          break;
        case 'defuse':
          break;
        case 'explodingKitten':
          state.gameStatus = 'lost';
          break;
        case 'shuffle':
          state.deck = ['cat', 'defuse', 'shuffle', 'explodingKitten', 'cat'].sort(() => Math.random() - 0.5);
          break;
        default:
          break;
      }
      if (state.deck.length === 0) {
        state.gameStatus = 'won';
      }
    },
    setUsername: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { startGame, drawCard, setUsername } = gameSlice.actions;
export default gameSlice.reducer;
