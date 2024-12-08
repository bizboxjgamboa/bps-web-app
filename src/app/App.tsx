import {NavLink, Outlet} from 'react-router';
import './reset.css';

function App() {
	return (
		<>
			<h1>Header</h1>
			<div>Body</div>
			<NavLink
				to="about"
				style={({isActive}) => ({
					fontWeight: isActive ? 'bold' : 'normal',
				})}
			>
				About
			</NavLink>
			<Outlet />
		</>
	);
}

export default App;
