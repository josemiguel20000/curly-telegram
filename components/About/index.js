import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/me.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				As a full stack web developer, I want to create a more user-friendly online environment. 
				I am obtaining a full stack development certificate from the Bootcamp
				 at the Rice University, featuring recently created JavaScript, CSS, 
				 React.js, and responsive web design projects. My reputation as a creative problem-solver devoted to 
				 creating apps, with a particular interest in developing front-end projects.My goal is to have a powerful impression on my user encounters.
			
				</p>
			</div>
		</section>
	);
}

export default About;