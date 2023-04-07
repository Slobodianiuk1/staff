import Header from './components/Header/Header'
import AppRoutes from './components/Routes/Routes'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { getCategories } from './store/categories/categoriesAction'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/store.hooks'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getCategories())
	}, [dispatch])

	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}

export default App
