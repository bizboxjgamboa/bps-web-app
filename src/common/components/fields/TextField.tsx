import {TextField as MuiTextField} from '@mui/material';
import {styled} from '@mui/material/styles';

const TextField = styled(MuiTextField)(({theme}) => ({
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: theme.palette.text.secondary,
		},
		'&:hover fieldset': {
			borderColor: theme.palette.primary.main,
		},
		'&.Mui-focused fieldset': {
			borderColor: theme.palette.primary.dark,
		},
	},
}));

export default TextField;
