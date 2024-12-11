import bpsLogo from '@assets/logos/bps.svg';
import MainAppBar from '@components/app/MainAppBar';
import MainDrawer from '@components/app/MainDrawer';
import MainDrawerHeader from '@components/app/MainDrawerHeader';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Start from '@mui/icons-material/Start';
import {Button, Paper} from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import {ROUTES_WITHOUT_APPBAR} from '@routes/index';
import {useState} from 'react';
import {Outlet, useLocation} from 'react-router';
import './App.css';

const App: React.FC = () => {
	const {
		palette: {primary},
	} = useTheme();

	const shouldShowAppBar = !ROUTES_WITHOUT_APPBAR.has(useLocation().pathname);

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

	return (
		<Box sx={{display: 'flex'}}>
			<CssBaseline />

			{shouldShowAppBar && (
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

			<MainDrawer variant="permanent" open={isDrawerOpen}>
				<MainDrawerHeader
					sx={{
						paddingLeft: '1em',
						backgroundColor: primary.main,
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					{isDrawerOpen && (
						<img
							src={bpsLogo}
							className="logo react"
							alt="React logo"
							draggable={false}
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
			<Box component="main" sx={{flexGrow: 1, p: 3}}>
				{shouldShowAppBar && <MainDrawerHeader />}
				<Paper>
					<Typography sx={{marginBottom: 2}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
						dolor purus non enim praesent elementum facilisis leo vel. Risus at
						ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
						rutrum quisque non tellus. Convallis convallis tellus id interdum
						velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
						sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
						integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
						eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
						quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
						vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
						donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography sx={{marginBottom: 2}}>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
						ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
						elementum integer enim neque volutpat ac tincidunt. Ornare
						suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
						volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
						Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
						ornare massa eget egestas purus viverra accumsan in. In hendrerit
						gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
						aliquam sem et tortor. Habitant morbi tristique senectus et.
						Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
						euismod elementum nisi quis eleifend. Commodo viverra maecenas
						accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
						ultrices sagittis orci a.
					</Typography>
				</Paper>
				<Button>pang test fullscreen with store</Button>
				<Outlet />
			</Box>
		</Box>
	);
};

export default App;
