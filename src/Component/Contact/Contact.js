import React from "react";
import "./Contact.scss";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ""
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className="contact" id="contact">
				<h2>Contact</h2>
				<form
					onSubmit={this.submitForm}
					action="https://formspree.io/xyypaovk"
					method="POST"
				>
					<input type="text" placeholder="Name" name="name" />
					<input type="text" placeholder="Email" name="email" />
					<textarea placeholder="message" name="msg" />
					{status === "SUCCESS" ? <div>Thanks!</div> : <button>Shoot!</button>}
					{status === "ERROR" && <div>Ooops! There was an error.</div>}
					{status === "SENDING" && <div>Sending!</div>}
				</form>
				<div className="social"></div>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		this.setState({ status: "SENDING" });
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
