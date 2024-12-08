import {Link} from 'react-router';

interface PageNotFoundProps {
	path: string;
	title?: string;
	message?: string;
	linkMessage?: string;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({
	path,
	title,
	message,
	linkMessage,
}) => (
	<div>
		<h1>{title || '404 - Page Not Found'}</h1>{' '}
		<p>{message || 'The page you are looking for does not exist.'}</p>
		<Link to={path}>{linkMessage || 'Go Back'}</Link>
	</div>
);

export default PageNotFound;
