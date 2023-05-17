import {createSlice} from '@reduxjs/toolkit';
import {login, logout, isAuthenticated, getUser} from '../services/authService';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const {loginStart, loginSuccess, loginFail, logout} = authSlice.actions;

export const loginAsync = (email, password) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await login(email, password);
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};

export default authSlice.reducer;
