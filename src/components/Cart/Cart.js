import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, taxes, subtotal, total, currency, removeFromCart }) => {
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
};

export default Cart;
