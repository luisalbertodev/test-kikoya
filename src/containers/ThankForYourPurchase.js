import { connect } from 'react-redux';
import ThankForYourPurchase from 'pages/private/ThankForYourPurchase';

const mapStateToProps = (state, props) => {
	return {
		orders: state.cart.orders,
	};
};

export default connect(mapStateToProps)(ThankForYourPurchase);
