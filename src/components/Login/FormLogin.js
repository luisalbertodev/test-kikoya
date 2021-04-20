import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/Core';

const FormLogin = ({ userLogin }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		const { username, password } = e.target;

		const form = {
			username: username.value,
			password: password.value,
		};

		userLogin(form);
	};

	return (
		<form onSubmit={onSubmit}>
			<Input required label="Username" name="username" placeholder="Enter your username" />
			<Input required label="Password" name="password" type="password" placeholder="Enter your password" />
			<button type="submit" className="btn btn-primary mt3 w-100">
				Log in
			</button>
		</form>
	);
};

FormLogin.propTypes = {
	userLogin: PropTypes.func.isRequired,
};

export default FormLogin;
