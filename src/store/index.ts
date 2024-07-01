import { configureStore } from "@reduxjs/toolkit";
import vendingReducer from "./vendingSlice";
import screenReducer from "./screenSlice";
import creditSlice from "./creditSlice";
import currencySlice from "./currencySlice";
import productsSlice from "./productsSlice";
import loadingSlice from "./loadingSlice";

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    products: productsSlice,
    credit: creditSlice,
    currency: currencySlice,
    vending: vendingReducer,
    screen: screenReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
