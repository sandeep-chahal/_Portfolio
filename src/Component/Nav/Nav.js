import React from "react";
import "./Nav.scss";
import GlitchClip from "react-glitch-effect/core/Clip";

const Nav = props => {
	return (
		<nav>
			<div className="logo"></div>
			<div className="menu">
				<div>
					<GlitchClip onHover duration={"1.5s"}>
						Projects
					</GlitchClip>
				</div>
				<div>
					<GlitchClip onHover duration={"1.5s"}>
						Contact
					</GlitchClip>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
