import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import React from 'react';
import {NavLink} from 'react-router';
import {NavigationItem} from '../config/navigationItems';

interface NavigationListProps {
	items: NavigationItem[];
	isDrawerOpen: boolean;
}

const MainNavigationList: React.FC<NavigationListProps> = ({
	items,
	isDrawerOpen,
}) => {
	const {
		palette: {secondary, text},
	} = useTheme();

	return (
		<List sx={{color: text.secondary}}>
			{items.map((item) => (
				<ListItem key={item.path} disablePadding sx={{display: 'block'}}>
					<NavLink
						to={item.path}
						style={({isActive}) => ({
							textDecoration: 'none',
							color: isActive ? secondary.main : 'inherit',
						})}
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								px: 4,
								justifyContent: isDrawerOpen ? 'initial' : 'center',
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									justifyContent: 'center',
									mr: isDrawerOpen ? 2 : 'auto',
									color: 'inherit',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primary={item.name}
								sx={{
									opacity: isDrawerOpen ? 1 : 0,
								}}
							/>
						</ListItemButton>
					</NavLink>
				</ListItem>
			))}
		</List>
	);
};

export default MainNavigationList;
