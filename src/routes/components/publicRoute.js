/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, authed, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				const { from } = props.location.state || {
					from: { pathname: '/' },
				};
				return authed === false ? <Component {...props} /> : <Redirect to={from} />;
			}}
		/>
	);
};
