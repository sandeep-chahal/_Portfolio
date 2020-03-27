import React from "react";
import "./Contact.scss";

const Contact = props => {
	return (
		<div className="contact" id="contact">
			<h2>Contact</h2>
			<form>
				<input type="text" placeholder="Name" />
				<input type="text" placeholder="Email" />
				<textarea placeholder="message" />
				<submit>Shoot!</submit>
			</form>
			<div className="social"></div>
		</div>
	);
};

export default Contact;
