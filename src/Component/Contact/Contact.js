import React from "react";
import "./Contact.scss";

const Contact = props => {
	return (
		<div className="contact" id="contact">
			<h2>Contact</h2>
			<form data-netlify="true" action="post" method="POST" name="contact">
				<input type="text" placeholder="Name" name="name" />
				<input type="text" placeholder="Email" name="email" />
				<textarea placeholder="message" name="msg" />
				<button type="submit">Shoot!</button>
			</form>
			<div className="social"></div>
		</div>
	);
};

export default Contact;
