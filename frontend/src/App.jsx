import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchItems } from "./actions";
//
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/Signup/Signup";
import GameDetails from "./components/GameDetails/GameDetails";

const App = (props) => {
	const { fetchItems } = props;

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="app-content">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route exact path="/store" component={Store} />
					<Route path="/cart" component={Cart} />
					<Route path="/store/:id" component={GameDetails} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	items: state.items,
	cart: state.cart,
});

export default connect(mapStateToProps, { fetchItems })(App);
