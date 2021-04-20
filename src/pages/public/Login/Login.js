import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FormLogin from 'containers/FormLogin';
import { withLoader } from 'HOC';

const Login = ({ setLoading }) => {
	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

	return (
		<div className="container">
			<div className="row">
				<div className="col flex justify-center self-center flex-column min-vh-100">
					<h3>Login</h3>
					<FormLogin />
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	setLoading: PropTypes.func.isRequired,
};

export default withLoader(Login, 'Loading login');
