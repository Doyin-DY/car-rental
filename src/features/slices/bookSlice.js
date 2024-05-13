import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = JSON.parse(localStorage.getItem("rental__book")) || [];

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToBook: (state, action) => {
      //find if the item has already been added to the cart
      const findInCart = state.findIndex((el) => el.id === action.payload.id);
      //   if the product is already in the cart
      if (findInCart > -1) {
        //show an error sayin the product already exist in the cart
        toast.error("This car has already been booked by you", { id: "123" });
      } 
      else {
        toast.success("This car has been added to your booking.", { id: "123" });
        state.push({ ...action.payload, qty: 1 });
        localStorage.setItem("rental__book", JSON.stringify(state));
      }
    },
    // DECREASE IN CART
    changeInBook(state, action) {
      // for each element in the cart, if the element id matches the id we are sending from the payload , change the quantity to the quantity of the one coming  from the payload;
      state.forEach((el) => {
        if (el.id === action.payload.id) el.qty = action.payload.qty;
      });
      localStorage.setItem("rental__book", JSON.stringify(state));
    },

    // REMOVE FROM CART
    removeFromBook(state, action) {
      const productIndex = state.findIndex((el) => el.id === action.payload.id);
      state.splice(productIndex, 1);
      localStorage.setItem("rental__book", JSON.stringify(state));
    },
  },
});

export const { addToBook, changeInBook, removeFromBook } =bookSlice.actions;
export default bookSlice.reducer;
