import React from "react";
import "./App.scss";
import Nav from "./Component/Nav/Nav";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Nav />
			</div>
		);
	}
}

export default App;
