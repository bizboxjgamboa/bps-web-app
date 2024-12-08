import {CssBaseline, ThemeProvider} from '@mui/material';
import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router';
import {router} from './routes/index.tsx';
import {lightTheme} from './themes/light-theme.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Suspense fallback={<div>loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</ThemeProvider>
	</StrictMode>
);
