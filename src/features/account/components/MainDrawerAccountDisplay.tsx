import {Avatar, ListItemAvatar} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface MainDrawerAccountDisplayProps {
	isDrawerOpen: boolean;
}

const MainDrawerAccountDisplay: React.FC<MainDrawerAccountDisplayProps> = ({
	isDrawerOpen,
}) => {
	return (
		<List>
			<ListItem disablePadding sx={{display: 'block'}} dense>
				<ListItemButton
					sx={[
						{
							minHeight: 48,
							px: 2.5,
							justifyContent: isDrawerOpen ? 'initial' : 'center',
						},
					]}
				>
					<ListItemAvatar
						sx={[
							!isDrawerOpen && {
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							},
						]}
					>
						<Avatar
							alt="User Avatar"
							src="https://picsum.photos/200"
							slotProps={{
								img: {loading: 'lazy'},
							}}
							sx={{
								height: 48,
								width: 48,
							}}
						/>
					</ListItemAvatar>
					{isDrawerOpen && (
						<ListItemText
							primary="John Gamboa"
							secondary="Admin"
							sx={{
								'& .MuiListItemText-root': {
									color: 'primary.main',
								},
								'& .MuiListItemText-primary': {
									whiteSpace: 'normal',
									wordWrap: 'break-word',
								},
								'& .MuiListItemText-secondary': {
									fontSize: '.65rem',
								},
								marginLeft: 1,
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
						/>
					)}
				</ListItemButton>
			</ListItem>
		</List>
	);
};

export default MainDrawerAccountDisplay;
