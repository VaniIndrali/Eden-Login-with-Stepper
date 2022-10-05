import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import App from "./App";

class RouteApp extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route
						exact
						path="/login"
						element={<App />}
					/>
					{/* path is http://localhost:3000/ in local so redirecting it to /login for a custom path experience*/}
					<Route
						path="*"
						element={<Navigate to="/login" />}
					/>
				</Routes>
			</Router>
		);
	}
}

export default RouteApp;
