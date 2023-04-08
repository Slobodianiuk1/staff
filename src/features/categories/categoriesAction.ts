import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICategoriesData } from '../../types/category.types'
import { BASE_URL } from '../../utils/instance.axios'

export const getCategories = createAsyncThunk<ICategoriesData[], undefined>(
	'categories/getCategories',
	async (_, { rejectWithValue }) => {
		try {
			return (await BASE_URL('categories')).data
		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	}
)
