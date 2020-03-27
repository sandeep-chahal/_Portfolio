import React from "react";
import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Home />
			</div>
		);
	}
}

export default App;
