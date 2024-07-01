import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenState {
  credit: number;
  firstRow: string;
  secondRow: string;
  showProgressBar: boolean;
  progress: number;
}

const initialState: ScreenState = {
  credit: 0,
  firstRow: "",
  secondRow: "",
  showProgressBar: false,
  progress: 0,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setFirstRow(state, action: PayloadAction<string>) {
      state.firstRow = action.payload;
    },
    setSecondRow(state, action: PayloadAction<string>) {
      state.secondRow = action.payload;
    },
    setShowProgressBar(state, action: PayloadAction<boolean>) {
      state.showProgressBar = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
  },
});

export const selectFirstRow = (state) => state.screen.firstRow;
export const selectSecondRow = (state) => state.screen.secondRow;
export const selectShowProgressBar = (state) => state.screen.showProgressBar;

export const { setFirstRow, setSecondRow, setShowProgressBar, setProgress } =
  screenSlice.actions;

export default screenSlice.reducer;
