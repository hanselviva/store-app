import {
	// ACTIONS
    START_FETCHING,
	SIGNUP,
	LOGIN,
	FETCHING_USER_SUCCESS,
    FETCH_ERROR,
	LOGOUT,
} from "../actions";

export const initialState = {
	isLoading: false,
	isLoggedIn: false,
	user: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isLoading: true,
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