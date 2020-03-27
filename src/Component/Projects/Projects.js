import React from "react";
import "./Projects.scss";

import Project from "./Project";
import BudgetGif from "../../Assets/budget-gif.gif";
import BudgetPng from "../../Assets/budget-img.png";
import DiscordGif from "../../Assets/discord-gif.gif";
import DiscordPng from "../../Assets/discord-img.png";
import VocabGif from "../../Assets/vocab-gif.gif";
import VocabPng from "../../Assets/vocab-img.png";
import CoronaPng from "../../Assets/corona-img.png";
import CoronaGif from "../../Assets/corona-gif.gif";

const Projects = props => {
	const projects = [
		{
			title: "Discord Clone",
			desc:
				"A clone  app of popular chat website discord using react, redux and firebase.",
			img: DiscordPng,
			gif: DiscordGif,
			github: "https://github.com/sandeep-chahal/discord-clone",
			demo: "https://discordclone.netlify.com/"
		},
		{
			title: "Corona Virus Dashboard",
			desc: "Corona Virus webiste to check updates with map, charts and more. ",
			img: CoronaPng,
			gif: CoronaGif,
			github: "https://github.com/sandeep-chahal/corona-virus-live",
			demo: "https://covid-live.netlify.com/"
		},
		{
			title: "Vocab Builder",
			desc:
				"A website to use subtitles of tv shows, movies and youtube to learn new vocabulary words.",
			img: VocabPng,
			gif: VocabGif,
			github:
				"https://github.com/sandeep-chahal/vocab-builder-with-movies-and-tvshows",
			demo: "https://vocab-builder.netlify.com/"
		},
		{
			title: "Budget Calculator",
			desc: "A simple budget calculator app with react and firebase",
			img: BudgetPng,
			gif: BudgetGif,
			github: "https://github.com/sandeep-chahal/budget-calculator",
			demo: "https://budgtcalc.netlify.com/"
		}
	];

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
