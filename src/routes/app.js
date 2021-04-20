import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/public/Login';
import Main from 'pages/private/Main';
import ThankForYourPurchase from 'containers/ThankForYourPurchase';
import Page404 from 'components/Page404';
import { loadScript } from 'utils';
import { BOOTSTRAP_BUNDLE } from 'data/cdns';
import { PrivateRoute, PublicRoute } from './components';

const App = ({ isLoged }) => {
	useEffect(() => {
		const loadScripts = async () => {
			try {
				await loadScript(BOOTSTRAP_BUNDLE);
			} catch (error) {
				console.log(error);
			}
		};

		loadScripts();
	}, []);

	return (
		<Router>
			<Switch>
				<PublicRoute exact path="/login" authed={isLoged} component={Login} />
				<PrivateRoute exact path="/" authed={isLoged} component={Main} />
				<Route path="/thank-for-your-purchase/:id" component={ThankForYourPurchase} />
				<Route path="*" component={Page404} />
			</Switch>
		</Router>
	);
};

App.propTypes = {
	isLoged: PropTypes.bool,
};

export default App;
