import {PageNotFound} from '@components/index';
import Home from '@home/index';
import Users from '@users/index';
import App from 'App';
import MainLayout from 'common/layouts/MainLayout';
import {createBrowserRouter} from 'react-router';
import {AuthLayout} from './AuthLayout';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />, // Root App component
		errorElement: <PageNotFound path="/" />,
		children: [
			// Public Routes
			{
				element: <AuthLayout />, // Wrapper for public routes
				children: [
					{
						path: 'auth',
						element: (
							<div>
								<p>X</p>
								<h1>X</h1>
								<h5>X</h5>
								testing auth layout
							</div>
						),
					},
					{
						path: 'no-appbar',
						element: <div>no appbar</div>,
					},
				],
			},

			// Protected Routes
			{
				element: (
					<ProtectedRoute>
						<MainLayout />
					</ProtectedRoute>
				),
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: 'users',
						element: <Users />,
					},
					{
						path: 'about',
						element: <div>about</div>,
					},
					{
						path: 'testing',
						element: <div>with appbar</div>,
					},
				],
			},

			// Catch-all route for undefined paths
			{
				path: '*',
				element: <PageNotFound path="/" />,
			},
		],
	},
]);
