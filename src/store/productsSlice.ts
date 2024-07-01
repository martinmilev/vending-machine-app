import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const selectProducts = (state) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
