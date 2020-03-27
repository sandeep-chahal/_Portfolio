import React, { useState } from "react";
import GithubPng from "../../Assets/github.png";
import LinkPng from "../../Assets/link.svg";
import VideoPng from "../../Assets/video.png";

const Project = props => {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="project"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div
				className="img"
				style={{
					backgroundImage: `url(${hover ? props.gif : props.img})`
				}}
			>
				{hover ? <img src={VideoPng} alt="playing video" /> : null}
			</div>
			<div className="title">{props.title}</div>
			<div className="desc">{props.desc}</div>
			<a href={props.demo} rel="noopener noreferrer" target="_blank">
				<img alt="demo" src={LinkPng} /> <span>Demo</span>
			</a>
			<a href={props.github} rel="noopener noreferrer" target="_blank">
				<img alt="github" src={GithubPng} /> <span>Github</span>
			</a>
		</div>
	);
};

export default Project;
