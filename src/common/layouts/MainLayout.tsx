import bpsLogo from '@assets/logos/bps.svg';
import MainAppBar from '@components/app/MainAppBar';
import MainDrawer from '@components/app/MainDrawer';
import MainDrawerHeader from '@components/app/MainDrawerHeader';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Start from '@mui/icons-material/Start';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {SCROLLABLE_ROUTES} from '@routes/index';
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

	const [facility, setFacility] = useState<string>('');
	const handleChangeFacility = (event: SelectChangeEvent) => {
		setFacility(event.target.value);
	};

	const isMainOnFullScreen = useMainLayoutStore.use.isMainOnFullScreen();

	return (
		<Box sx={{display: 'flex'}}>
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
							sx={[
								{
									marginRight: 5,
								},
								isDrawerOpen && {display: 'none'},
							]}
						>
							<Start />
						</IconButton>
						<Box maxHeight={'4em'}>
							<Select
								name="facility"
								value={facility}
								onChange={handleChangeFacility}
								autoWidth
								variant="standard"
								disableUnderline={true}
								aria-label="Select Facility"
								sx={{
									display: 'flex',
									alignItems: 'center',
									minWidth: '5em',
									'& .MuiSelect-select': {
										color: 'common.white',
										display: 'flex',
										alignItems: 'center',
										marginRight: '.5em',
										fontSize: '1.25rem',
									},
									'& .MuiSelect-icon': {
										color: 'white',
									},
								}}
								IconComponent={KeyboardArrowDown}
							>
								<MenuItem value={1}>First</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={21}>Twenty one</MenuItem>
								<MenuItem value={22}>Twenty one and a half</MenuItem>
								<MenuItem value={23}>
									<Typography>
										Twenty one and a half Twenty one and a half Twenty one and a
										half Twenty one and a half
									</Typography>
								</MenuItem>
							</Select>
						</Box>
					</Toolbar>
				</MainAppBar>
			)}

			{!isMainOnFullScreen && (
				<MainDrawer variant="permanent" open={isDrawerOpen}>
					<MainDrawerHeader
						sx={{
							paddingLeft: '1em',
							backgroundColor: primary.main,
							display: 'flex',
							justifyContent: 'space-between',
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
							<Start />
						</IconButton>
					</MainDrawerHeader>
					<Divider />
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem key={text} disablePadding sx={{display: 'block'}}>
								<ListItemButton
									sx={[
										{
											minHeight: 48,
											px: 2.5,
											justifyContent: isDrawerOpen ? 'initial' : 'center',
										},
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: 'center',
												mr: isDrawerOpen ? 3 : 'auto',
											},
										]}
									>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText
										primary={text}
										sx={[
											{
												opacity: isDrawerOpen ? 1 : 0,
											},
										]}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem key={text} disablePadding sx={{display: 'block'}}>
								<ListItemButton
									sx={[
										{
											minHeight: 48,
											px: 2.5,
											justifyContent: isDrawerOpen ? 'initial' : 'center',
										},
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: 'center',
												mr: isDrawerOpen ? 3 : 'auto',
											},
										]}
									>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText
										primary={text}
										sx={[
											{
												opacity: isDrawerOpen ? 1 : 0,
											},
										]}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</MainDrawer>
			)}

			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 1,
					backgroundColor: 'pink',
					height: shouldMainBodyHaveFixHeight ? '100%' : 'auto',
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
