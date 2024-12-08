import {createBrowserRouter} from 'react-router';
import TestingParams from '../../features/testing/Testing';
import PageNotFound from '../../shared/components/PageNotFound';
import App from '../App';

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
]);
