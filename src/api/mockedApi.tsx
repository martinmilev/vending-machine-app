import { Dispatch } from "@reduxjs/toolkit";
import mockData from "../../mockApi/mockData.json";
import { setLoading } from "../store/loadingSlice";
import { setProducts } from "../store/productsSlice";
import { setCurrency } from "../store/currencySlice";

export const getUrl = () => import.meta.env.VITE_API_URL || "/";

export const fetchProducts = () => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setProducts(mockData.products));
    dispatch(setLoading(false));
  }, 1000);
};

export const fetchCurrency = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(setCurrency(mockData.EU));
  }, 1000);
};
