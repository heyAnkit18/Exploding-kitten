import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaderboard: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    updateLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const { updateLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
