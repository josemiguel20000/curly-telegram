import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
			</div>
			<div>
				<h5>Front-End</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>Git</li> 
				</ol>
				<br></br>
				<h5>Back-End</h5>
				<ol>
					<li>APIs</li>
                    <li>Express</li>
					<li>NodeJS</li>
					<li>MVC</li>
					<li>REST</li>
					<li>PWA</li>
				</ol>
				<br></br>
				<h5>Dev Tool</h5>
				<ol>
					<li>Git</li>
                    <li>Webpack</li>
					<li>npm</li>
					<li>Jest</li>
					
				</ol>
				<br></br>
				<h5>Database</h5>
				<ol>
					<li>MySQL</li>
                    <li>Mongoose</li>
                    <li>NoSQL</li>
					<li>Sequelize</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					
				</ol>
			</div>
		</section>
	);
}

export default Resume;