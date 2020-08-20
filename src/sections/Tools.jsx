import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faGitAlt,
	faJs,
	faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Tools.css";

const Tools = ({ element }) => {
	const [isDestkop, setDesktop] = useState(window.innerWidth > 360);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 360);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	const renderToolsList = () => {
		if (isDestkop) {
			return (
				<div className="tools-list">
					<ul>
						<li>JavaScript</li>
						<li>React</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Bootstrap</li>
					</ul>
					<ul>
						<li>Express</li>
						<li>Node</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>Rest API</li>
					</ul>
					<ul>
						<li>Git</li>
						<li>Redux</li>
						<li>Material-UI</li>
						<li>Jest</li>
						<li>Webpack</li>
					</ul>
				</div>
			);
		}
		return (
			<p className="tools-p">
				JavaScript React HTML CSS Bootstrap Express Node MySQL MongoDB
				Rest API Redux Material-UI Git Webpack Jest
			</p>
		);
	};

	return (
		<div className="tools stage dark">
			<div ref={element}>
				<h1>Tools I Use</h1>
				<p>
					Here are some of the tools I have been working with recently
					both as an individual developer and in a team setting. My
					ever-growing skillset is driven by enthusiastic curiosity as
					I continue to learn and create with new technologies and
					languages.
				</p>
				{renderToolsList()}
				<div className="tools-icons">
					<FontAwesomeIcon icon={faJs} className="js-icon" />
					<FontAwesomeIcon icon={faReact} className="react-icon" />
					<FontAwesomeIcon icon={faNodeJs} className="node-icon" />
					<FontAwesomeIcon icon={faGitAlt} className="git-icon" />
				</div>
			</div>
		</div>
	);
};

export default Tools;
