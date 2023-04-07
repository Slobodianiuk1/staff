import { createSlice } from '@reduxjs/toolkit'
import { CategoriesData } from '../../types/category.types'
import { getCategories } from './categoriesAction'

interface CategoriesState {
	list: CategoriesData[]
	isLoading: boolean
}

const initialState: CategoriesState = {
	list: [],
	isLoading: false
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		qwe: () => {}
	},
	extraReducers: builder => {
		builder
			.addCase(getCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.isLoading = false
				state.list = action.payload
			})
			.addCase(getCategories.rejected, state => {
				state.isLoading = false
			})
	}
})

export default categoriesSlice.reducer
