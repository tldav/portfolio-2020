import React from "react";
import "../stylesheets/Intro.css";

const Intro = () => {
	return (
		<div className="intro stage ">
			<div className="intro-flex-container">
				<img
					className="me"
					src={process.env.PUBLIC_URL + "/assets/me.jpg"}
					alt="Headshot of Thomas Davis"
				/>
				<h1>Thomas L. Davis</h1>
				<p className="job-title">Full Stack Developer</p>
			</div>
			<p>
				Full stack web and software developer with a background in
				insurance fraud analysis and special investigations. With a
				certificate in full stack development from Southern Methodist
				University, my ambition is to construct engaging applications
				that focus on the user first. An ardent love for aesthetic
				design and a penchant for abstract problem-solving inspire
				continuous improvement of my proficiency as a developer.
			</p>
		</div>
	);
};

export default Intro;
