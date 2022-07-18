import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Coding quiz challange',
			description:
				'This is a coding quiz that i made to test the up and coming devloper and skills, on what they learned.',
			image: 'coding-quiz-image.png',
			technology: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
			],
			github: 'https://github.com/josemiguel20000/didactic-bassoon-quiz',
			deployed: 'https://josemiguel20000.github.io/didactic-bassoon-quiz/',
		},
		{
			name: 'ReadMe GEN',
			description:
				' a generator that makes a great readme for your project, we used node.js and inquirer packecges to make this possible.',
			image: 'readmegen-image.png',
			technology: [
	
				'Node.js',
			],
			github: 'https://github.com/josemiguel20000/new-new-2000',
			deployed: 'https://github.com/josemiguel20000/new-new-2000',
		},
		{
			name: 'Taskinator',
			description:
				'This is a website i built to keep track of all the things you have to do.',
			image: 'Taskinator-image.png',
			technology: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/josemiguel20000/task-pro-2000',
			deployed: 'https://josemiguel20000.github.io/task-pro-2000/',
		},
		{
			name: 'Team-gen',
			description:
				'My goal was to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. ',
			image: 'Teamgen-image.png',
			technology: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/josemiguel20000/symmetrical-couscous-Team_gen',
			deployed: 'https://github.com/josemiguel20000/symmetrical-couscous-Team_gen',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technology: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/josemiguel20000/jmf-pass-gen.',
			deployed: 'https://josemiguel20000.github.io/jmf-pass-gen./',
		},
		{
			name: 'Note Taker',
			description:
				'The user of this application can enter notes, and once they are saved, they are displayed in the left sidebar. By selecting the trash can icon next to each note, you can delete it.',
			image: 'note-taker-image.png',
			technology: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/josemiguel20000/expert-meme-notetak3r',
			deployed: 'https://josemiguel20000.github.io/expert-meme-notetak3r/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;