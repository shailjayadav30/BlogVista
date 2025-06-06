import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean
}
const initialState: AuthState = {
  user: null, 
  isAuthenticated: false
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
})
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
