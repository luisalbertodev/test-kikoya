import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'; // library of persist
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import cartReducer from 'ducks/cart';
import productsReducer from 'ducks/products';
import usersReducer, { initialStateUsers } from 'ducks/users';
import App from 'containers/App';
import productsData from 'data/products';
import usersData from 'data/users';
import 'assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const persistConfig = {
	key: 'ecommerceTest',
	storage: storage,
};

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productsReducer,
	users: usersReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	pReducer,
	{
		products: productsData, // initial store values
		users: {
			...initialStateUsers, // copy properties of users object
			users: usersData, // initial users values
		},
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

const persistor = persistStore(store); // create store and persistor,

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
