import MuiButton from '@mui/material/Button';
import {styled} from '@mui/material/styles';

const SubmitButton = styled(MuiButton)(({theme}) => ({
	borderRadius: '100px',
	textTransform: 'none',
	backgroundColor: theme.palette.primary.main,
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
}));

export default SubmitButton;
