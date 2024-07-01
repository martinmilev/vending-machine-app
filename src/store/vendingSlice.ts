import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VendingState {
  purchaseInProgress: boolean;
  progress: number;
}

const initialState: VendingState = {
  purchaseInProgress: false,
  progress: 0,
};

const vendingSlice = createSlice({
  name: "vending",
  initialState,
  reducers: {
    setPurchaseInProgress(state, action: PayloadAction<boolean>) {
      state.purchaseInProgress = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
  },
});

export const selectPurchaseInProgress = (state: VendingState) =>
  state.vending.purchaseInProgress;

export const { setPurchaseInProgress, setProgress } = vendingSlice.actions;

export default vendingSlice.reducer;
