import { connect } from 'react-redux';
import App from 'routes/app';

const mapStateToProps = (state, props) => {
	return {
		isLoged: state.users.isLoged,
	};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
