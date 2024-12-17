import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

// Use by pages that don't include in SCROLLABLE_ROUTES

const NonScrollablePaper = styled(Paper)(({theme}) => ({
	flexGrow: 1,
	padding: '1.25rem',
	color: theme.palette.primary.main,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '0.625rem',
}));

export default NonScrollablePaper;
