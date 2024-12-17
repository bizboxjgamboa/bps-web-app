import Menu from '@mui/material/Menu';
import {styled} from '@mui/material/styles';

const FilterMenu = styled(Menu)(({theme}) => ({
	'& .MuiMenu-paper': {
		borderRadius: '12px',
		width: '12.5rem',
		backgroundColor: theme.palette.background.paper,
	},
}));

export default FilterMenu;
