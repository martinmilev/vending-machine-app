import { createSlice } from "@reduxjs/toolkit";
import { Currency } from "../ts/types/currency";

const initialState: Currency = {
  sign: "",
  cent: "",
  denominations: [],
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => action.payload,
  },
});

export const selectCurrency = (state) => state.currency;

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
