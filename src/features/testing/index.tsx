import {Button} from '@mui/material';
import {useMainLayoutStore} from 'common/stores/mainLayoutStore';

const Testing: React.FC = () => {
	const toggleFullscreen = useMainLayoutStore.use.toggleFullScreen();
	return (
		<div>
			<Button onClick={toggleFullscreen}>Toggle Fullscreen</Button>
		</div>
	);
};

export default Testing;
