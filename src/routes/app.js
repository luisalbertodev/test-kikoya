import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages/public/Login';
import Main from 'pages/private/Main';
import Page404 from 'components/Page404';
import { PrivateRoute, PublicRoute } from './components';

const App = ({ isLoged }) => {
	return (
		<Router>
			<Switch>
				<PublicRoute exact path="/login" authed={isLoged} component={Login} />
				<PrivateRoute exact path="/" authed={isLoged} component={Main} />
				<Route path="*" component={Page404} />
			</Switch>
		</Router>
	);
};

App.propTypes = {
	isLoged: PropTypes.bool,
};

export default App;
