type ProtectedRouteProps = {
	children: React.ReactNode; // Ensure this is included
};

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
	return children;
};

export default ProtectedRoute;
