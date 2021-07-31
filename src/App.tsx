import '@fontsource/roboto';
import './styles/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Login from './components/login';
import Layout from './components/layout';

function App() {
	if (localStorage.getItem('user')) {
		return (
			<Router>
				<Switch>
					<Redirect from='*' to='/login' />
					<Route path='/login'>
						<Login />
					</Route>
				</Switch>
			</Router>
		);
	}

	return (
		<Router>
			<Layout>
				<Switch>
					<Redirect from='*' to='/' />
					<Route path='/'>
						<div>home</div>
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
