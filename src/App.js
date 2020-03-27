import React from "react";
import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Home />
				<Projects />
			</div>
		);
	}
}

export default App;
