import MuiButton from '@mui/material/Button';
import {styled} from '@mui/material/styles';

const CancelButton = styled(MuiButton)(({theme}) => ({
	borderRadius: '100px',
	textTransform: 'none',
	'&:hover': {
		color: theme.palette.error.main,
	},
}));

export default CancelButton;
