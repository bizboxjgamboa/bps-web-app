import {Button, Paper} from '@mui/material';
import {useMainLayoutStore} from 'common/stores/mainLayoutStore';

const Users: React.FC = () => {
	const toggleFullscreen = useMainLayoutStore.use.toggleFullScreen();
	return (
		<Paper sx={{flexGrow: 1}}>
			<div>Users</div>
			<Button onClick={toggleFullscreen}>Toggle Fullscreen</Button>
		</Paper>
	);
};

export default Users;
