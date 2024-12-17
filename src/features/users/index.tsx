import NonScrollablePaper from '@components/paper/NonScrollablePaper';
import UserForm from './components/UserForm';
import UserHeader from './components/UserHeader';
import UserTools from './components/UserTools';

const Users: React.FC = () => {
	return (
		<NonScrollablePaper>
			<UserHeader />
			<UserTools />
			<UserForm />
		</NonScrollablePaper>
	);
};

export default Users;
