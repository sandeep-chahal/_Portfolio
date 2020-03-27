import React from "react";
import "./Projects.scss";

import Project from "./Project";

const Projects = props => {
	const projects = [];

	return (
		<div className="projects" id="projects">
			<h2>My Work</h2>
			<div className="item-container">
				{projects.map(project => (
					<Project key={project.title} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
