import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategoriesData } from "../../utils/types/category.types";
import { BASE_URL } from "../../utils/axios/instance.axios";

export const getCategories = createAsyncThunk<ICategoriesData[], undefined>(
  "categories/getCategoriessss",
  async (_, { rejectWithValue }) => {
    try {
      return (await BASE_URL("categories")).data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);