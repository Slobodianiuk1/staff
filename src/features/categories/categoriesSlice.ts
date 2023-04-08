import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesData } from "../../types/category.types";
import { getCategories } from "./categoriesAction";

interface ICategoriesState {
  list: ICategoriesData[];
  isLoading: boolean;
}

const initialState: ICategoriesState = {
  list: [],
  isLoading: false
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default categoriesSlice.reducer;
