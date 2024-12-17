import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const FilterMenuTitle = styled(Typography)(({theme}) => ({
	fontWeight: 600,
	color: theme.palette.primary.main,
	fontSize: '0.875rem',
	padding: '0 0.625rem 1.25rem 0.625rem',
}));

export default FilterMenuTitle;
