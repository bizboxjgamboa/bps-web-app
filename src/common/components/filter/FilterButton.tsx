import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

interface FilterButtonProps {
	open: boolean;
	hasFilter: boolean;
	handleClickFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
	ariaControls?: string;
	id?: string;
}

const StyledButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'open',
})<{open: boolean}>(({theme, open}) => ({
	borderRadius: '12px',
	backgroundColor: open ? theme.palette.secondary.main : 'transparent',
	transition: 'background-color 0.3s ease',
}));

const StyledFilterIcon = styled(FilterListIcon, {
	shouldForwardProp: (prop) => prop !== 'open' && prop !== 'hasFilter',
})<{open: boolean; hasFilter: boolean}>(({theme, open, hasFilter}) => ({
	fontSize: '1.75rem',
	color: open
		? theme.palette.common.white
		: hasFilter
			? theme.palette.secondary.main
			: theme.palette.primary.main,
	transition: 'color 0.3s ease',
}));

const FilterButton: React.FC<FilterButtonProps> = ({
	open,
	hasFilter,
	handleClickFilter,
	ariaControls = '',
	id = 'filter-button',
}) => {
	return (
		<StyledButton
			id={id}
			open={open}
			aria-controls={ariaControls || (open ? 'filter-menu' : undefined)}
			aria-haspopup="true"
			aria-expanded={open ? 'true' : undefined}
			onClick={handleClickFilter}
		>
			<StyledFilterIcon open={open} hasFilter={hasFilter} />
		</StyledButton>
	);
};

export default FilterButton;
