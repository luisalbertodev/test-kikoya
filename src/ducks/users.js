import Message from 'antd-message';

// actions
const ADD_USER = 'user/ADD';
const LOGIN_USER = 'user/LOGIN';
const LOGOUT_USER = 'user/LOGOUT';

// utils
const normalizeString = (e) =>
	e
		.trim()
		.toUpperCase()
		.replace(/[^a-zA-Z ]/g, '');

// reducer
export const initialStateUsers = {
	users: [], // array of users
	isLoged: false,
	currentUser: undefined,
};

export default function user(state = initialStateUsers, action = {}) {
	switch (action.type) {
		case ADD_USER:
			return handleAddUser(state, action.payload);
		case LOGIN_USER:
			return handleLoginUser(state, action.payload);
		case LOGOUT_USER:
			return handleLogoutUser(state, action.payload);
		default:
			return state;
	}
}

function handleAddUser(state, payload) {
	return {
		...state,
		items: [...state.items, ...payload],
	};
}

function handleLoginUser(state, payload) {
	const { currentUser, message, type } = getUser(state, payload);
	Message[type](message);
	return {
		...state,
		currentUser,
		isLoged: verifyUserExist(currentUser),
	};
}

function handleLogoutUser(state, payload) {
	return {
		...state,
		currentUser: undefined,
		isLoged: false,
	};
}

// actions
export function addUser(payload) {
	return {
		type: ADD_USER,
		payload,
	};
}

export function userLogin(payload) {
	return {
		type: LOGIN_USER,
		payload,
	};
}

export function userLogout(payload) {
	return {
		type: LOGOUT_USER,
		payload,
	};
}

// selectors
function verifyUserExist(currentUser) {
	return Boolean(currentUser);
}

function getUser(state, props) {
	const data = {
		currentUser: undefined,
		type: 'error',
		message: '',
	};

	const singleUser = state.users.find((currentUser) => {
		const isMathUsername = normalizeString(props.username) === normalizeString(currentUser.username);
		return isMathUsername;
	});

	const isMathPassword = normalizeString(props.password) === normalizeString(singleUser?.password);
	const isProfileWithAccess = singleUser?.role !== 'user';

	if (!singleUser) {
		data.currentUser = undefined;
		data.type = 'error';
		data.message = 'This user not exist in to system';
	} else if (isMathPassword && isProfileWithAccess) {
		data.currentUser = singleUser;
		data.type = 'success';
		data.message = `Welcomete again ${singleUser.username}`;
	} else if (isMathPassword) {
		data.currentUser = undefined;
		data.type = 'error';
		data.message = `This  profile not with access`;
	} else {
		data.currentUser = undefined;
		data.type = 'error';
		data.message = `Password incorrect`;
	}

	return data;
}
