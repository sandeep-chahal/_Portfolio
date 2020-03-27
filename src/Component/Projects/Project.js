import React, { useState } from "react";
import GithubPng from "../../Assets/github.png";
import LinkPng from "../../Assets/link.svg";

const Project = props => {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="project"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img alt={props.title} src={hover ? props.gif : props.img} />
			<div className="title">{props.title}</div>
			<div className="desc">{props.desc}</div>
			<a href={props.github} rel="noopener noreferrer" target="_blank">
				<img alt="demo" src={LinkPng} /> <spam>Demo</spam>
			</a>
			<a href={props.github} rel="noopener noreferrer" target="_blank">
				<img alt="github" src={GithubPng} /> <span>Github</span>
			</a>
		</div>
	);
};

export default Project;
