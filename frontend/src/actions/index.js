import axiosWithAuth from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const ADD_TO_CART = "ADD_TO_CART";

export const signup = (signupCredentials) => (dispatch) => {
	console.log("signup credentials", signupCredentials);
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.post("https://reqres.in/api/register", signupCredentials)
		.then((response) => {
			console.log("response", response);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("userId", response.data.id);
			dispatch({
				type: SIGNUP,
				payload: response.data,
			});
			dispatch({
				type: LOGIN,
			});
		})
		.catch((error) => {
			console.log(error.response.data.error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.response.data.error,
			});
		});
};

export const login = (loginCredentials) => (dispatch) => {
	console.log("login credentials", loginCredentials);
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.post("https://reqres.in/api/login", loginCredentials)
		.then((response) => {
			console.log(response);
			localStorage.setItem("token", response.data.token);
			dispatch({
				type: LOGIN,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.response.data.error,
			});
		});
};

export const getUser = (id) => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axiosWithAuth()
		.get(`https://reqres.in/api/users/${id}`)
		.then((response) => {
			dispatch({
				type: FETCHING_USER_SUCCESS,
				payload: response.data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: FETCH_ERROR,
				payload: error.response.data.error,
			});
		});
};

// export const addToCart = () => (dispatch) => {
// 	dispatch({
// 		type: START_FETCHING,
// 	});
// 	axiosWithAuth()
// 		.put(`https://reqres.in/api/users`)
// 		.then((response) => {
// 			dispatch({
// 				type: ADD_TO_CART,
// 				payload: response.data,
// 			}).catch((error) => {
// 				console.log(error);
// 				dispatch({
// 					type: FETCH_ERROR,
// 					payload: error.response.data.error,
// 				});
// 			});
// 		});
// };

export const addToCart = (obj) => (dispatch) => {
	dispatch({
		type: ADD_TO_CART,
		payload: obj,
	});
};

export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: LOGOUT,
	});
};

export const clearError = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERROR,
	});
};
