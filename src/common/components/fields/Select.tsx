import MuiSelect from '@mui/material/Select';
import {styled} from '@mui/material/styles';

const StyledSelect = styled(MuiSelect)(({theme}) => ({
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.text.secondary, // Default border
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.primary.main, // Hover state
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.primary.dark, // Focus state
	},
	'& .MuiSelect-icon': {
		color: theme.palette.secondary.main, // Icon color
	},
	'&.Mui-disabled .MuiSelect-icon': {
		color: theme.palette.action.disabled, // Disabled state icon color
	},
}));

export default StyledSelect;
