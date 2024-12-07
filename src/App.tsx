import {useState} from 'react';
import reactLogo from './assets/react.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Vite + React</h1>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
