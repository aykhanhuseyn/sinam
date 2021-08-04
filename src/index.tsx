import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { SnackbarProvider } from 'notistack';
import './styles/index.css';

ReactDOM.render(
	<SnackbarProvider
		dense
		maxSnack={3}
		domRoot={document.getElementById('notistack')!}
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'left',
		}}
	>
		<App />
	</SnackbarProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
