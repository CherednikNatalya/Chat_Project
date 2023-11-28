import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUser,
} from '../AuthOperations/AuthOperations';

const initialState = {
  token: null,
  userDto: {
    userName: '',
    userEmail: '',
    avatar: '',
    // birthday: '',
    // phone: '',
  },

  isLoggedIn: false,
  isRefresh: true,
  error: null,
};

const handlePending = state => {
  state.isRefresh = true;
};

const handleRejected = (state, action) => {
  state.isRefresh = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: 
  builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {

        state.userDto = action.payload.userDto;
        state.token = action.payload.token;

        state.isLoggedIn = true;
        console.log('register action', action)
      })

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {

        state.userDto = action.payload.userDto;
        state.token = action.payload.token;

        console.log('login action', action);
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.userDto = { userName: null, userEmail: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefresh = false;
      })

      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.userDto = action.payload.userDto;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userDto = { ...state.userDto, ...action.payload };
      }),
});

export default authSlice.reducer;

