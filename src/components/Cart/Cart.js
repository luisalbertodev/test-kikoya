import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { uuidv4 } from 'utils';
import { useHistory } from 'react-router-dom';

const Cart = ({ items, taxes, subtotal, total, currency, removeFromCart, completeCheckout }) => {
	const [isloading, setLoading] = useState(false);
	const history = useHistory();

	const senToSuccessPurchase = () => {
		const order = {
			items,
			id: uuidv4(),
			date: new Date().toLocaleString(),
		};

		setLoading(true);
		completeCheckout(order);
		setTimeout(() => {
			history.push(`/thank-for-your-purchase/${order.id}`);
			setLoading(false);
		}, 1500);
	};

	return (
		<div>
			<h3>Shopping Cart</h3>

			<div className="cart">
				<div className="panel panel-default">
					<div className="panel-body">
						{items.length > 0 && (
							<div className="cart__body">
								{items.map((item) => (
									<CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
								))}
							</div>
						)}
						{items.length === 0 && <div className="alert alert-info">Cart is empty</div>}
						<div className="cart__other_mount">
							Taxes: {taxes} {currency}
						</div>
						<div className="cart__other_mount">
							Subtotal {subtotal} {currency}
						</div>
						<div className="cart__total">
							Total: {total} {currency}
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={senToSuccessPurchase}
							disabled={isloading}
						>
							{isloading ? 'Loading...' : 'Purchase'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cart.propTypes = {
	items: PropTypes.array,
	taxes: PropTypes.number,
	subtotal: PropTypes.number,
	total: PropTypes.number,
	currency: PropTypes.string,
	removeFromCart: PropTypes.func.isRequired,
	completeCheckout: PropTypes.func.isRequired,
};

export default Cart;
