import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  mode: string
} = {
  mode: "light"
};

export const appSlide = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeMode: (state, action) => {
        state.mode = action.payload
    }
  }
});

export const { changeMode } = appSlide.actions;
// export const selectCount = (state: RootState) => state.count.value;

export default appSlide.reducer;
