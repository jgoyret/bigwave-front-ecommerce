import { th } from "@faker-js/faker";
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const checkAndAddToCart = createAsyncThunk(
  "cart/checkAndAddToCart",
  async (entrieProduct, { dispatch, getState }) => {
    const { id, slug } = entrieProduct;
    const state = getState();

    const response = await axios({
      url: `${import.meta.env.VITE_API_URL}/products/${slug}`,
      method: "get",
    });

    const productData = response.data;

    if (response.status === 200) {
      const alreadyInCart = state.cart.find((item) => item.id === id);

      if (alreadyInCart) {
        if (
          alreadyInCart.quantity + entrieProduct.quantity <=
          productData.stock
        ) {
          dispatch(addQuantity({ id, quantity: entrieProduct.quantity }));

          toast.success(
            `Added ${entrieProduct.quantity} ${entrieProduct.name} to the cart`,
            {
              position: "bottom-right",
            }
          );
        } else {
          toast.error("Stock insuficiente", {
            position: "bottom-right",
          });
          throw new Error("Stock insuficiente");
        }
      } else {
        if (entrieProduct.quantity <= productData.stock) {
          dispatch(addToCart({ ...entrieProduct }));
          toast.success(
            `Added ${entrieProduct.quantity} ${entrieProduct.name} to the cart`,
            {
              position: "bottom-right",
            }
          );
        } else {
          toast.error("Stock insuficiente", {
            position: "bottom-right",
          });
          throw new Error("Stock insuficiente");
        }
      }
    } else {
      throw new Error(data.message);
    }
  }
);

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
    clearCart: () => {
      return [];
    },
    removeQuantity(state, action) {
      const { id } = action.payload;
      const selectedItem = state.find((item) => item.id === id);
      if (selectedItem.quantity > 1) {
        selectedItem.quantity -= 1;
      }
    },
    addQuantity(state, action) {
      const { id, quantity } = action.payload;
      const selectedItem = state.find((item) => item.id === id);
      if (selectedItem) {
        selectedItem.quantity += quantity;
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
  clearCart,
  totalPrice,
} = actions;
export default reducer;
