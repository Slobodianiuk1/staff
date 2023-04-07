import { createAsyncThunk } from '@reduxjs/toolkit'
import { CategoriesData } from '../../types/category.types'

export const getCategories = createAsyncThunk<
	CategoriesData[],
	undefined,
	{ rejectValue }
>('categories/getCategories', async (_, { rejectWithValue }) => {
	const res = await fetch(`https://api.escuelajs.co/api/v1/categories`)
	if (!res.ok) {
		return rejectWithValue('Server Error!')
	}
	const data = await res.json()
	return data
})

const lastReturnedAction = await dispatch(fetchUserById(3))
