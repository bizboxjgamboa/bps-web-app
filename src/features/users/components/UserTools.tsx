import {FilterButton, FilterMenu, FilterMenuTitle} from '@components/filter';
import AddIcon from '@mui/icons-material/Add';
import {Box, Button, MenuItem, Typography} from '@mui/material';
import {useUserStore} from '@users/stores/userStore';
import {useState} from 'react';

const UserTools: React.FC = () => {
	// start: filter
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);
	const handleClickFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseMenu = () => {
		setAnchorEl(null);
	};
	// end: filter

	const setIsDialogOpen = useUserStore.use.setIsDialogOpen();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '1.25rem',
				justifyContent: 'space-between',
				width: '100%',
			}}
		>
			<FilterButton
				open={Boolean(anchorEl)}
				hasFilter={false}
				handleClickFilter={handleClickFilter}
				ariaControls="filter-menu"
				id="filter-button"
			/>
			<FilterMenu
				id="filter-menu"
				anchorEl={anchorEl}
				open={isMenuOpen}
				onClose={handleCloseMenu}
				MenuListProps={{
					'aria-labelledby': 'filter-button',
				}}
			>
				<FilterMenuTitle>Filter By</FilterMenuTitle>
				<MenuItem
					onClick={() => {}}
					sx={{
						padding: '0.625rem 1rem',
						fontSize: '0.875rem',
						color: 'primary.main',
					}}
				>
					All
				</MenuItem>
				{/* map usertype here */}
			</FilterMenu>
			<Typography>X Search textfield here X</Typography>
			<Button
				id="add-new-user-button"
				variant="contained"
				color="secondary"
				sx={{
					borderRadius: '100px',
					textTransform: 'none',
				}}
				onClick={() => setIsDialogOpen(true)}
				startIcon={<AddIcon />}
			>
				Add New User
			</Button>
		</Box>
	);
};

export default UserTools;
