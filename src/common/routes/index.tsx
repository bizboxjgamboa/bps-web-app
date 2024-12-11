import {PageNotFound} from '@components/index';
import App from 'App';
import {createBrowserRouter} from 'react-router';

export const ROUTES_WITHOUT_APPBAR = new Set(['/', '/about']);

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
			{
				path: 'testing',
				element: <div>no appbar</div>,
			},
		],
	},
]);
