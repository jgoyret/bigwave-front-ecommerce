import { createSlice, nanoid } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		login(state, action) {
			console.log(action.payload);
			return (state = action.payload);
		},
		logout(state) {
			console.log('estamos en logout');
			return (state = {});
		},
	},
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
