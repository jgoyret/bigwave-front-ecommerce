import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      return (state = action.payload);
    },
    logout(state, action) {
      state.token = null;
      state.user = null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
