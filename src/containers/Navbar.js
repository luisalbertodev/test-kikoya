import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import { userLogout } from 'ducks/users';

const mapStateToProps = (state, props) => {
	return {
		currentUser: state.users.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => ({
	userLogout: (user) => dispatch(userLogout(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
