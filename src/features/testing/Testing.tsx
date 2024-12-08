import {Typography, useTheme} from '@mui/material';
import {useParams} from 'react-router';

const TestingParams = () => {
	const params = useParams<{testingId: string}>();
	const {
		palette: {secondary},
	} = useTheme();

	return (
		<div>
			<Typography
				sx={{
					color: secondary.main,
				}}
			>
				Testing
			</Typography>

			<p>{params.testingId}</p>
		</div>
	);
};

export default TestingParams;
