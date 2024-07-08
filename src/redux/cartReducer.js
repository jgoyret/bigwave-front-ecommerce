import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { id, quantity = 1 } = action.payload;
      const alreadyInCart = state.find((item) => item.id === id);
      alreadyInCart
        ? (alreadyInCart.quantity += quantity)
        : state.push({ ...action.payload });
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeQuantity(state, action) {
      const { id } = action.payload;
      const selectedItem = state.find((item) => item.id === id);
      if (selectedItem.quantity > 1) {
        selectedItem.quantity -= 1;
      }
    },
    addQuantity(state, action) {
      const { id } = action.payload;
      const selectedItem = state.find((item) => item.id === id);
      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addToCart,
  removeFromCart,
  removeQuantity,
  addQuantity,
  totalPrice,
} = actions;
export default reducer;
