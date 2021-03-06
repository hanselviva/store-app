import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const DATA_FOR_CAROUSEL = "DATA_FOR_CAROUSEL";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const ADD_TO_CART = "ADD_TO_CART";
export const ITEMS_FETCHED = "ITEMS_FETCHED";
export const REMOVE_FROM_CART = "REMOVE_FROM CART";

const generatePrice = () => {
	return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
};

const options = {
	method: "GET",
	url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
	params: { platform: "pc" },
	headers: {
		"x-rapidapi-key": "deab7fc526msh8a770823a240463p14a705jsn82b32902b654",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
	},
};

// const options = {
// 	method: "GET",
// 	url: "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games",
// };

const shufflingAnArray = (arr) => {
	const shuffle = arr.sort(() => 0.5 - Math.random());
	const arrForCarousel = shuffle.slice(0, 4);
	return arrForCarousel;
};

export const fetchItems = () => (dispatch) => {
	dispatch({
		type: START_FETCHING,
	});
	axios
		.request(options)
		.then((res) =>
			dispatch({
				type: ITEMS_FETCHED,
				payload: res.data.map((data) => ({
					...data,
					rent: generatePrice(),
				})),
			}),
		)
		.catch((err) => console.log(err));
	axios
		.request(options)
		.then((res) =>
			dispatch({
				type: DATA_FOR_CAROUSEL,
				payload: shufflingAnArray(res.data),
			}),
		)
		.catch((err) => console.log(err));
};

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

export const addToCart = (item) => (dispatch) => {
	dispatch({
		type: ADD_TO_CART,
		payload: item,
	});
};

export const removeFromCart = (item) => (dispatch) => {
	dispatch({
		type: REMOVE_FROM_CART,
		payload: item,
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
