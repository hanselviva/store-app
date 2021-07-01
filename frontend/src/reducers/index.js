import {
	// ACTIONS
	START_FETCHING,
	SIGNUP,
	LOGIN,
	FETCHING_USER_SUCCESS,
	ADD_TO_CART,
	FETCH_ERROR,
	LOGOUT,
	ITEMS_FETCHED,
} from "../actions";

export const initialState = {
	items: [],
	isLoading: false,
	isLoggedIn: false,
	user: null,
	fetchError: null,
	cart: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case ITEMS_FETCHED:
			return {
				...state,
				items: action.payload,
			};
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				fetchError: null,
				isLoading: false,
			};
		case SIGNUP:
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case FETCHING_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				fetchError: null,
				isLoading: false,
			};
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case FETCH_ERROR:
			return {
				...state,
				fetchError: action.payload,
				isLoading: false,
			};
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};
