import { createSlice } from '@reduxjs/toolkit';
import { createMockJWT, parseMockJWT } from '../utils/mockJwt';

const savedToken = localStorage.getItem('mock_jwt_token');
const savedUser = savedToken ? parseMockJWT(savedToken) : null;

const initialState = {
  token: savedToken || null,
  user: savedUser ? savedUser.username : '',
  role: savedUser ? savedUser.role : null,
  isAuthenticated: !!savedUser,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginWithMockJwt: (state, action) => {
      const { username, role } = action.payload;

      if (!username.trim()) {
        state.error = 'Please enter a valid username.';
        return;
      }

      const token = createMockJWT(username.trim(), role);
      const decodedPayload = parseMockJWT(token);

      localStorage.setItem('mock_jwt_token', token);

      state.token = token;
      state.user = decodedPayload.username;
      state.role = decodedPayload.role;
      state.isAuthenticated = true;
      state.error = '';
    },
    logout: (state) => {
      localStorage.removeItem('mock_jwt_token');
      state.token = null;
      state.user = '';
      state.role = null;
      state.isAuthenticated = false;
      state.error = '';
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});

export const { loginWithMockJwt, logout, clearError } = authSlice.actions;
export default authSlice.reducer;