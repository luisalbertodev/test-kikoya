/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return authed === true ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				);
			}}
		/>
	);
};
