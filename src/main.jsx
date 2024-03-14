// ========== MAIN COMPONENT MODULE ========== //

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router basename='/restaurant-page'>
			<App />
		</Router>
	</React.StrictMode>,
);

