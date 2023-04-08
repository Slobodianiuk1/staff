import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoriesData, ICategoriesState } from "../../utils/types/category.types";
import { getCategories } from "./categoriesAction";


const initialState: ICategoriesState = {
  list: [],
  isLoading: false,
  error: null
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
      .addCase(getCategories.fulfilled, (state, action: PayloadAction<ICategoriesData[]>) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(getCategories.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});
export default categoriesSlice.reducer;