import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const alreadyInCart = state.find((item) => item.id === action.payload.id);
      !alreadyInCart
        ? state.push({ ...action.payload, quantity: 1 })
        : (alreadyInCart.quantity += 1);
    },
    removeFromCart(state, action) {},
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart } = actions;
export default reducer;
