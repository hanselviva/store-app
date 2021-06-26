import React from "react";
import "./App.css";
//
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="app-content">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={Login} />
					<Route path="/store" component={Store} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
