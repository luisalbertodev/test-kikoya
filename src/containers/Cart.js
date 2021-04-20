import { connect } from 'react-redux';
import Cart from 'components/Cart';
import { getItems, getCurrency, getTotal, getSubtotal, getTaxes, removeFromCart, completeCheckout } from 'ducks/cart';

const mapStateToProps = (state, props) => {
	return {
		items: getItems(state, props),
		currency: getCurrency(state, props),
		total: getTotal(state, props),
		subtotal: getSubtotal(state, props),
		taxes: getTaxes(state, props),
	};
};

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id) => dispatch(removeFromCart(id)),
	completeCheckout: (id) => dispatch(completeCheckout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
