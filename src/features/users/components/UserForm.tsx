import CancelButton from '@components/buttons/CancelButton';
import SubmitButton from '@components/buttons/SubmitButton';
import Select from '@components/fields/Select';
import TextField from '@components/fields/TextField';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormControl, InputLabel, MenuItem} from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useUserStore} from '@users/stores/userStore';
import {IdentityType} from 'common/enums/IdentityType';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';

const schema = z.object({
	lastName: z.string().min(1, 'Last Name is required'),
	firstName: z.string().min(1, 'First Name is required'),
	middleName: z.string().optional(),
	suffix: z.string().optional(),
	email: z.string().email('Invalid email address'),
	userName: z.string().min(1, 'Username is required'),
	userType: z.nativeEnum(IdentityType, {
		errorMap: () => ({message: 'Invalid User Type'}),
	}),
});

type UserFormData = z.infer<typeof schema>;

const UserForm: React.FC = () => {
	const isDialogOpen = useUserStore.use.isDialogOpen();
	const setIsDialogOpen = useUserStore.use.setIsDialogOpen();

	const {
		register,
		handleSubmit,
		control,
		// setError,
		reset,
		formState: {errors, isSubmitting},
	} = useForm<UserFormData>({
		// defaultValues: {
		// 	email: 'test@email.com',
		// },
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<UserFormData> = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(data);
			// throw new Error();
		} catch {
			// setError('lastName', {
			// 	message: 'Last name already exists',
			// });
		}
	};

	const handleClose = () => {
		setIsDialogOpen(false);
		reset();
	};

	return (
		<>
			<Dialog
				open={isDialogOpen}
				onClose={handleClose}
				maxWidth="sm"
				fullWidth
				closeAfterTransition={false}
				PaperProps={{
					component: 'form',
					sx: {borderRadius: '12px'},
					onSubmit: handleSubmit(onSubmit),
				}}
			>
				<DialogTitle color="primary.main">Add New User</DialogTitle>
				<DialogContent>
					<DialogContentText color="primary">
						Personal Information
					</DialogContentText>
					<TextField
						{...register('lastName')}
						required
						autoFocus
						margin="dense"
						size="small"
						id="lastName"
						name="lastName"
						label="Last Name"
						fullWidth
						autoComplete="off"
						error={!!errors.lastName}
						helperText={errors.lastName?.message}
					/>
					<TextField
						{...register('firstName')}
						required
						margin="dense"
						size="small"
						id="firstName"
						name="firstName"
						label="First Name"
						fullWidth
						autoComplete="off"
						error={!!errors.firstName}
						helperText={errors.firstName?.message}
					/>
					<TextField
						{...register('middleName')}
						margin="dense"
						size="small"
						id="middleName"
						name="middleName"
						label="Middle Name"
						fullWidth
						autoComplete="off"
					/>
					<TextField
						{...register('suffix')}
						margin="dense"
						size="small"
						id="suffix"
						name="suffix"
						label="Suffix"
						fullWidth
						autoComplete="off"
					/>
				</DialogContent>
				<DialogContent>
					<DialogContentText color="primary">
						Account Information
					</DialogContentText>
					<TextField
						{...register('email')}
						margin="dense"
						size="small"
						id="email"
						name="email"
						type="email"
						label="Email"
						required
						fullWidth
						autoComplete="off"
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
					<Box display={{display: 'flex', gap: '.75rem'}}>
						<TextField
							{...register('userName')}
							margin="dense"
							size="small"
							id="userName"
							name="userName"
							label="Username"
							required
							fullWidth
							autoComplete="off"
							error={!!errors.userName}
							helperText={errors.userName?.message}
						/>
						<Controller
							name="userType"
							control={control}
							defaultValue={IdentityType.None}
							// rules={{required: 'User Type is required'}} // Validation Rules
							render={({field, fieldState}) => (
								<FormControl
									fullWidth
									margin="dense"
									size="small"
									error={!!fieldState.error}
								>
									<InputLabel id="user-type-select-label">User Type</InputLabel>
									<Select
										{...field}
										labelId="user-type-select-label"
										id="userType"
										label="User Type"
										name="userType"
									>
										<MenuItem value={IdentityType.None}>None</MenuItem>
										<MenuItem value={IdentityType.SuperAdmin}>
											Super Admin
										</MenuItem>
										<MenuItem value={IdentityType.Admin}>Admin</MenuItem>
										<MenuItem value={IdentityType.Patient}>Patient</MenuItem>
										<MenuItem value={IdentityType.User}>User</MenuItem>
									</Select>
								</FormControl>
							)}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<CancelButton onClick={handleClose}>Cancel</CancelButton>
					{/* <Button type="submit">Subscribe</Button> */}
					<SubmitButton
						type="submit"
						id="submit-user-button"
						variant="contained"
						onClick={() => setIsDialogOpen(true)}
						disabled={isSubmitting}
					>
						Add New User
					</SubmitButton>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default UserForm;
