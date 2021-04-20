import { connect } from 'react-redux';
import FormLogin from 'components/Login';
import { userLogin } from 'ducks/users';

const mapStateToProps = (state, props) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	userLogin: (user) => dispatch(userLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
