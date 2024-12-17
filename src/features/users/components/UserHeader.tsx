import PeopleIcon from '@mui/icons-material/People';
import {Box, Typography} from '@mui/material';

const UserHeader: React.FC = () => {
	return (
		<Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
			<PeopleIcon sx={{height: 30, width: 30}} />
			<Typography variant="h1" fontSize="1.25rem">
				Users
			</Typography>
		</Box>
	);
};

export default UserHeader;
