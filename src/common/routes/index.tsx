import {PageNotFound, X} from '@components/index';
import Dashboard from '@profiling/dashboard';
import App from 'App';
import TestingParams from 'features/testing/Testing';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PageNotFound path="/" />,
		children: [
			{
				path: 'about',
				element: <div>about</div>,
			},
		],
	},
	{
		path: '/testing/:testingId',
		element: <TestingParams />,
	},
	{
		path: '/profiling/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/x',
		element: <X />,
	},
]);
