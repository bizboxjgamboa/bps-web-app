import {ThemeProvider} from '@mui/material';
import {router} from '@routes/index';
import {lightTheme} from '@themes/light-theme';
import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router';
import './reset.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={lightTheme}>
			<Suspense fallback={<div>loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</ThemeProvider>
	</StrictMode>
);
