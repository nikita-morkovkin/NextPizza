import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  activeCategory: number;
  changeCategory: (category: number) => void;
}

const initialState = {
  activeCategory: 1,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
