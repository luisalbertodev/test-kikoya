import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cart from 'containers/Cart';
import ProductList from 'containers/ProductList';
import Navbar from 'containers/Navbar';
import { withLoader } from 'HOC';

const Main = ({ setLoading }) => {
	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>Virtual Shop</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<ProductList />
					</div>
					<div className="col-md-4">
						<Cart />
					</div>
				</div>

				<footer>
					<small>
						powered by <a href="http://www.kikoya.mx/">Kikoya</a>
					</small>
				</footer>
			</div>
		</>
	);
};

Main.propTypes = {
	setLoading: PropTypes.func.isRequired,
};

export default withLoader(Main, 'Loading login');
