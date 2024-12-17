import MuiButton from '@mui/material/Button';
import {styled} from '@mui/material/styles';

const ActionButton = styled(MuiButton)(({theme}) => ({
	borderRadius: '100px',
	textTransform: 'none',
	backgroundColor: theme.palette.secondary.main,
}));

export default ActionButton;
