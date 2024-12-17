import MainDrawerAccountDisplay from '@account/components/MainDrawerAccountDisplay';
import bpsLogo from '@assets/logos/bps.svg';
import MainAppBarSelectFacility from '@clients/components/MainAppBarSelectFacility';
import MainAppBar from '@components/app/MainAppBar';
import MainDrawer from '@components/app/MainDrawer/MainDrawer';
import MainDrawerHeader from '@components/app/MainDrawer/MainDrawerHeader';
import StartIcon from '@mui/icons-material/Start';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import {navigationItems} from 'common/config/navigationItems';
import {SCROLLABLE_ROUTES} from 'common/config/scrollableRoutes';
import MainNavigationList from 'common/navigation/MainNavigationList';
import {useMainLayoutStore} from 'common/stores/mainLayoutStore';
import {useState} from 'react';
import {Outlet, useLocation} from 'react-router';

const MainLayout: React.FC = () => {
	const {
		palette: {primary},
	} = useTheme();

	const shouldShowAppBar = !SCROLLABLE_ROUTES.has(useLocation().pathname);
	const shouldMainBodyHaveFixHeight = shouldShowAppBar;

	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const handleDrawerOpen = () => {
		setIsDrawerOpen(true);
	};
	const handleDrawerClose = () => {
		setIsDrawerOpen(false);
	};

	const isMainOnFullScreen = useMainLayoutStore.use.isMainOnFullScreen();

	return (
		<Box
			sx={{
				display: 'flex',
				height: shouldMainBodyHaveFixHeight ? '100vh' : '100%',
			}}
		>
			{!isMainOnFullScreen && shouldShowAppBar && (
				<MainAppBar position="fixed" open={isDrawerOpen}>
					<Toolbar
						sx={{
							display: 'flex',
							justifyContent: isDrawerOpen ? 'flex-end' : 'space-between',
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={[{marginRight: 5}, isDrawerOpen && {display: 'none'}]}
						>
							<StartIcon />
						</IconButton>
						<MainAppBarSelectFacility />
					</Toolbar>
				</MainAppBar>
			)}

			{!isMainOnFullScreen && (
				<MainDrawer
					variant="permanent"
					open={isDrawerOpen}
					anchor="left"
					sx={{height: '100%'}}
				>
					<MainDrawerHeader
						sx={{
							px: '1.5em',
							backgroundColor: primary.main,
							display: 'flex',
							justifyContent: isDrawerOpen ? 'space-between' : 'center',
							alignItems: 'center',
						}}
					>
						{isDrawerOpen && (
							<img
								src={bpsLogo}
								className="logo react"
								alt="React logo"
								draggable={false}
								height={42}
							/>
						)}

						<IconButton
							onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
							sx={[
								{color: 'common.white'},
								isDrawerOpen && {transform: 'rotate(180deg)'},
							]}
						>
							<StartIcon />
						</IconButton>
					</MainDrawerHeader>
					<Divider />
					<MainDrawerAccountDisplay isDrawerOpen={isDrawerOpen} />
					<MainNavigationList
						items={navigationItems}
						isDrawerOpen={isDrawerOpen}
					/>
				</MainDrawer>
			)}

			<Box
				component="main"
				sx={{
					display: 'flex',
					flexGrow: 1,
					p: 1,
					height: shouldMainBodyHaveFixHeight ? '100%' : 'auto',
					flexDirection: 'column',
					overflow: shouldMainBodyHaveFixHeight ? 'hidden' : 'visible',
				}}
			>
				{!isMainOnFullScreen && shouldShowAppBar && <MainDrawerHeader />}
				<Outlet />
			</Box>
		</Box>
	);
};

export default MainLayout;
