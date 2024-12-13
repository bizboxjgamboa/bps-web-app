import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';
import {mainDrawerWidth} from './MainDrawer/MainDrawer';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const MainAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme}) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({open}) => open,
			style: {
				marginLeft: mainDrawerWidth,
				width: `calc(100% - ${mainDrawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

export default MainAppBar;
