import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsPurchase from 'components/ThankForYourPurchase';
import { useParams } from 'react-router-dom';
import { withLoader } from 'HOC';

const ThankForYourPurchase = ({ setLoading, orders }) => {
	const [singleOrder, setSingleOrder] = useState(undefined);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const order = orders.find((el) => el.id === id);
			setSingleOrder(order);
		}

		setLoading(false);
	}, [setLoading, id, orders]);

	return (
		<div className="container">
			<div className="row flex justify-center items-center min-vh-100">
				<div className="col-xs voucher__container">
					<img src="https://broxtechnology.com/images/iconos/box.png" alt="box" className="voucher__icon" />
					<h1>Thank for you purchase</h1>
					<h5>Order: {id}</h5>
					<h5>Date: {singleOrder?.date}</h5>
					<ProductsPurchase products={singleOrder?.items} />
				</div>
			</div>
		</div>
	);
};

ThankForYourPurchase.propTypes = {
	setLoading: PropTypes.func.isRequired,
	orders: PropTypes.array,
};

export default withLoader(ThankForYourPurchase, 'Loading page');
