import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {FormControl} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';

const MainAppBarSelectFacility: React.FC = () => {
	const [facility, setFacility] = useState<string>('');
	const handleChangeFacility = (event: SelectChangeEvent) => {
		setFacility(event.target.value);
	};

	return (
		<FormControl variant="standard">
			<Select
				name="facility"
				value={facility}
				onChange={handleChangeFacility}
				autoWidth
				disableUnderline={true}
				aria-label="Select Facility"
				sx={{
					display: 'flex',
					alignItems: 'center',
					minWidth: '5em',
					'& .MuiSelect-standard': {
						color: 'common.white',
						display: 'flex',
						alignItems: 'center',
						marginRight: '.5em',
						fontSize: '1.25rem',
						whiteSpace: 'nowrap', // Prevent wrapping
						overflow: 'hidden', // Hide overflowing text
						textOverflow: 'ellipsis', // Show ellipsis for overflow
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
			</Select>
		</FormControl>
	);
};

export default MainAppBarSelectFacility;
