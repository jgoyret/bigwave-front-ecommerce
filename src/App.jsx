import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import RegisterForm from './pages/RegisterForm';
import About from './pages/About';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import Category from './pages/Category';
import Checkout from './pages/Checkout';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <RegisterForm />,
		},
		{
			path: '/products',
			element: <AllProducts />,
		},
		{
			path: '/categories/:slug',
			element: <Category />,
		},
		{
			path: '/products/:slug',
			element: <Product />,
		},
		{
			path: '/about-this-project',
			element: <About />,
		},
		{
			path: '/checkout',
			element: <Checkout />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
