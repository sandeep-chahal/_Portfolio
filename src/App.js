import React from "react";
import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Home />
				<Projects />
				<Contact />
			</div>
		);
	}
}

export default App;
