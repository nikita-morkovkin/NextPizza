import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  activeCategory: string;
  changeCategory: (category: string) => void;
}

const initialState = {
  activeCategory: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
