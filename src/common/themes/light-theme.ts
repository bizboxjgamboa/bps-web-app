import {createTheme} from '@mui/material/styles';
import {palettes} from './palettes';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {main: palettes.$primaryColor},
		secondary: {main: palettes.$secondaryColor},
		background: {default: palettes.$backgroundColor},
		text: {
			primary: palettes.$primaryTextColor,
			secondary: palettes.$secondaryTextColor,
			disabled: palettes.$placeholderTextColor,
		},
		success: {main: palettes.$success},
		warning: {main: palettes.$warning},
		error: {main: palettes.$danger},
		info: {main: palettes.$info},
	},

	//** OVERRIDES
	components: {
		MuiCheckbox: {
			defaultProps: {
				color: 'secondary',
			},
		},
		MuiRadio: {
			defaultProps: {
				color: 'secondary',
			},
		},
	},
});
