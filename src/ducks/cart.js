import { getProduct } from 'ducks/products';
import { getIva, formatNumberTwoDigit } from '../utils';

// actions
const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const CART_CHECKOUT = 'cart/CHECKOUT';

// reducer
const initialState = {
	items: [], // array of product ids
	orders: [], // array of orders completed
	currency: 'MEX',
};

export default function cart(state = initialState, action = {}) {
	switch (action.type) {
		case CART_ADD:
			return handleCartAdd(state, action.payload);
		case CART_REMOVE:
			return handleCartRemove(state, action.payload);
		case CART_CHECKOUT:
			return handleCompleteCheckout(state, action.payload);
		default:
			return state;
	}
}

function handleCartAdd(state, payload) {
	return {
		...state,
		items: [...state.items, payload.productId],
	};
}

function handleCartRemove(state, payload) {
	return {
		...state,
		items: state.items.filter((id) => id !== payload.productId),
	};
}

function handleCompleteCheckout(state, payload) {
	return {
		...state,
		items: [],
		orders: [...state.orders, payload],
	};
}

// action creators
export function addToCart(productId) {
	return {
		type: CART_ADD,
		payload: {
			productId,
		},
	};
}

export function removeFromCart(productId) {
	return {
		type: CART_REMOVE,
		payload: {
			productId,
		},
	};
}

export function completeCheckout(payload) {
	return {
		type: CART_CHECKOUT,
		payload,
	};
}

// selectors
export function isInCart(state, props) {
	return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
	return state.cart.items.map((id) => getProduct(state, { id }));
}

export function getCurrency(state, props) {
	return state.cart.currency;
}

export function getTotal(state, props) {
	const subtotal = getSubtotal(state);
	const taxes = getTaxes(state);
	const total = subtotal + taxes;
	return formatNumberTwoDigit(total);
}

export function getSubtotal(state, props) {
	const subtotal = state.cart.items.reduce((acc, id) => {
		const item = getProduct(state, { id });
		return acc + item.price;
	}, 0);

	return formatNumberTwoDigit(subtotal);
}

export function getTaxes(state, props) {
	const subtotal = getSubtotal(state);
	const taxes = getIva(subtotal);
	return formatNumberTwoDigit(taxes);
}
