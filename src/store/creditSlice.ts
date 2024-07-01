import { createSlice } from "@reduxjs/toolkit";

const creditSlice = createSlice({
  name: "credit",
  initialState: 0,
  reducers: {
    setCredit: (state, action) => action.payload,
    addCredit: (state, action) =>
      parseFloat((state + action.payload).toFixed(2)),
  },
});

export const selectCredit = (state) => state.credit;

export const { setCredit } = creditSlice.actions;
export const { addCredit } = creditSlice.actions;

export default creditSlice.reducer;