import BugReportIcon from '@mui/icons-material/BugReport';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import People from '@mui/icons-material/People';
import React from 'react';

export interface NavigationItem {
	name: string;
	path: string;
	icon: React.ReactNode;
}

export const navigationItems: NavigationItem[] = [
	{name: 'Home', path: '/', icon: <HomeIcon />},
	{name: 'Users', path: '/users', icon: <People />},
	{name: 'About', path: '/about', icon: <InfoIcon />},
	{name: 'Testing', path: '/testing', icon: <BugReportIcon />},
];
