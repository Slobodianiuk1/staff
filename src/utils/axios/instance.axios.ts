import axios from 'axios'

export const BASE_URL = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' },
})
