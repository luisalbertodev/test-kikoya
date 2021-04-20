/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import roleGrants from 'data/role_grants';
import { Account } from 'assets/svg';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, userLogout }) => {
	const roles = useMemo(() => roleGrants.find((el) => el?.role === currentUser?.role), [currentUser]);
	return (
		<nav className="navbar">
			<div className="container">
				<div className="row flex items-center">
					<div className="col-xs-6">
						<Link className="navbar-brand" to="/">
							<img
								src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
								alt=""
								width="30"
								height="24"
							/>
						</Link>
					</div>
					<div className="col-xs-6">
						<div className="row flex justify-end">
							<div className="btn-group">
								<button
									type="button"
									className="btn btn-primary btn-sm dropdown-toggle"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<div className="flex items-center">
										{currentUser?.username}
										<img src={Account} alt="account-icon" width="22px" className="invert pl2" />
									</div>
								</button>
								<ul className="dropdown-menu">
									{roles?.modules.map(({ option, id }) => (
										<li key={id}>
											<a href="#" className="dropdown-item">
												{option}
											</a>
										</li>
									))}
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li className="pointer">
										<a className="dropdown-item" href={null} onClick={() => userLogout(undefined)}>
											Logout
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	currentUser: PropTypes.object,
	userLogout: PropTypes.func,
};

export default Navbar;
