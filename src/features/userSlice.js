import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null,
  //status: 'idle',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
