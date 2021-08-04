import '@fontsource/roboto';
import './styles/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Layout from './components/layout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import QuestionsList from './pages/Questions';

function App() {
	if (!localStorage.getItem('user')) {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Redirect from='*' to='/login' />
				</Switch>
			</Router>
		);
	}

	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={QuestionsList} />
					<Route
						exact
						path='/hello'
						component={() => (
							<div>
								<div>hello</div>
							</div>
						)}
					/>
					<Route path='*' component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
