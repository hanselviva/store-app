import React from "react";
import "./App.css";
import { connect } from "react-redux";
//
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="app-content">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={Login} />
					<Route path="/store" component={Store} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
});

export default connect(mapStateToProps, {})(App);
