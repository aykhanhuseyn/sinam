import { lazy } from 'react';
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
const QuestionsList = lazy(() => import('./pages/Questions'));
const QuestionsSingle = lazy(() => import('./pages/Questions/[id]'));

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
					<Redirect from='/' exact to='/questions' />
					<Route exact path='/questions' component={QuestionsList} />
					<Route exact path='/questions/:id' component={QuestionsSingle} />
					<Route path='*' component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
