import { createSlice, nanoid } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		login(state, action) {
			console.log(action.payload);
			return (state = action.payload);
		},
	},
});

const { actions, reducer } = userSlice;
export const { login } = actions;
export default reducer;
