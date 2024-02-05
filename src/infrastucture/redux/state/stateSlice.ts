import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: number;
  email: string;
  foto: string;
  nama: string;
  no_wa: string;
  password: string;
  pekerjaan: string;
  peran: string;
  createdAt: string;
  updatedAt: string;
};

const initialState: {
  user: User | null;
} = {
  user: null
};

const stateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: { type: string; payload: typeof initialState.user }) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = stateSlice.actions;
export default stateSlice.reducer;
