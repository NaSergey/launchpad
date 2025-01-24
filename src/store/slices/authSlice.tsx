import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  error: string | null;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const userExists = state.users.find(user => user.email === action.payload.email);
      if (userExists) {
        state.error = 'Пользователь с таким email уже существует';
      } else {
        state.users.push(action.payload);
        state.currentUser = action.payload;
        state.error = null;
      }
    },
    login: (state, action: PayloadAction<User>) => {
      const user = state.users.find(user => 
        user.email === action.payload.email && 
        user.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        state.error = null;
      } else {
        state.error = 'Неверный email или пароль';
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
