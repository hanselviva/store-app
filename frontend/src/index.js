import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// == end of default import
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ff5722",
			light: "#ff8a50",
			dark: "#c41c00e",
			// contrastText: "",
		},
		secondary: {
			main: "#263238",
			light: "#4f5b62",
			dark: "#000a12",
			// contrastText: "",
		},
	},
	typography: {
		fontFamily: [" Tahoma "],
	},
});

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</Router>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
