import CssBaseline from '@mui/material/CssBaseline';
import {Outlet} from 'react-router';
import './App.css';

const App: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<Outlet />
		</>
	);
};

export default App;
