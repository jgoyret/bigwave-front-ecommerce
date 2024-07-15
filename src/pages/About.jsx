import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import '../styles/AboutUs.css';
import reactLogo from '../assets/reactjs-icon.svg';
import nodeLogo from '../assets/nodejs-icon.svg';
import expressLogo from '../assets/expressjs-icon.svg';
import sqlLogo from '../assets/mysql-icon.svg';
import gitLogo from '../assets/github-icon-2.svg';
import trelloLogo from '../assets/trello.svg';
import materialLogo from '../assets/devicon--materialui.svg';
import jwtLogo from '../assets/icons8-jwt.svg';
import excalidrawLogo from '../assets/simple-icons--excalidraw.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function About() {
	const steps = [
		{
			label: 'Course extension',
			description:
				'The project was developed in just <strong> 3 weeks </strong>, during July 2024. It was divided into one-week-long sprints (Scrum).',
		},
		{
			label: 'Technologies',
			description:
				'For the Front-End of the site, an application was developed in <strong>React</strong> (using Create-React-App), while for the Back-End a REST API was developed with <strong>Node.js</strong>, <strong>Express</strong>, <strong>SQL</strong>, and Git/GitHub.',
		},
		{
			label: 'Distribution of tasks',
			description:
				"For task organization during the project, <strong>Trello</strong> was used. This allowed each team member to always be aware of the project's status as well as the tasks they needed to complete.",
		},
	];

	return (
		<>
			<div className="container">
				<div className="container-fluid about-title text-center text-white">
					<h1>About this project</h1>
				</div>
				<div className=" container main-container">
					<div className="row">
						<div className="col col-md-6 d-flex" id="aboutText">
							<p>
								The following e-commerce site is a project developed by students
								of the Coding Bootcamp at <strong>Hack Academy</strong>. The
								Bootcamp is an immersive and extremely practical program,
								consisting of a <strong>full-time</strong> schedule over 3
								months. During this period, students invest more than{' '}
								<strong>600 hours</strong> in learning about Node.js, Express,
								React.js, SQL, MongoDB, and Git.
							</p>
						</div>
						<div id="stepper" className="col col-md-6">
							<Box>
								<Stepper orientation="vertical">
									{steps.map((step) => (
										<Step key={step.label} active={true}>
											<StepLabel className="">{step.label}</StepLabel>
											<StepContent>
												<Typography
													dangerouslySetInnerHTML={{ __html: step.description }}
												/>
											</StepContent>
										</Step>
									))}
								</Stepper>
							</Box>
						</div>
					</div>
				</div>
			</div>

			<div className="heading">
				<h3>Our Tools: </h3>
			</div>
			<div className="container">
				<div className="w-100 mt-5 mb-4 justify-content-evenly d-flex">
					<Tippy
						placement="right"
						content="React is used to develop the project's user interface, facilitating the creation of dynamic and interactive components. In addition, it allows the development of single-page applications and optimizes the rendering of the page via the virtual DOM."
					>
						<img
							src={reactLogo}
							className="iconStyle showDescription"
							alt="react logo"
						/>
					</Tippy>

					<Tippy
						placement="right"
						content="Node.js provides the runtime environment for running JavaScript on the server, supporting the execution of backend logic and serving as the foundation upon which frameworks like Express are built."
					>
						<img src={nodeLogo} className="iconStyle" alt="node logo" />
					</Tippy>
					<Tippy
						placement="right"
						content="GitHub is a web-based platform used for version control and collaborative software development. It hosts Git repositories and provides tools to facilitate project management, collaboration, and code sharing among team members."
					>
						<img src={gitLogo} className="iconStyle" alt="github logo" />
					</Tippy>
				</div>
				<div className="w-100 justify-content-evenly mb-4 d-flex">
					<Tippy
						placement="right"
						content="Trello is a web-based project management tool that utilizes boards, lists, and cards to help teams organize and prioritize tasks and projects in a visual manner. It is particularly useful for agile development methodologies and collaborative project management."
					>
						<img src={trelloLogo} className="iconStyle" alt="trello logo" />
					</Tippy>
					<Tippy
						placement="right"
						content="Excalidraw is a collaborative virtual whiteboard tool that allows teams to sketch diagrams, wireframes, and visual concepts directly in the web browser. We used it to prototype the project's user interface and plan the layout of the site."
					>
						<img
							src={excalidrawLogo}
							className="iconStyle"
							alt="excalidraw logo"
						/>
					</Tippy>
					<Tippy
						placement="right"
						content="Express handle database queries to MySQL, serve API routes, manage authentication with JWT, and provide data to the frontend built with React."
					>
						<img src={expressLogo} className="iconStyle" alt="express logo" />
					</Tippy>
				</div>
				<div className="w-100 justify-content-evenly d-flex">
					<Tippy
						placement="right"
						content="JWTs are used for authentication, where upon successful login, a JWT containing user information and roles is issued. This token is then sent with subsequent API requests to authorize access to protected resources or endpoints."
					>
						<img src={jwtLogo} className="iconStyle" alt="jwt logo" />
					</Tippy>
					<Tippy
						placement="right"
						content="Material-UI is used to build the frontend user interface, leveraging its rich set of components to create a cohesive and visually appealing design. It helps in maintaining a consistent design language across the application and speeds up development by providing robust, tested components."
					>
						<img
							src={materialLogo}
							className="iconStyle"
							alt="material ui logo"
						/>
					</Tippy>
					<Tippy
						placement="right"
						content="MySQL is used to store and manage data related to users, products, orders, and other entities required by the application. It facilitates efficient data storage, retrieval, and management through SQL queries, ensuring reliable and scalable data handling for your web application."
					>
						<img src={sqlLogo} className="iconStyle" alt="my sql logo" />
					</Tippy>
				</div>
			</div>

			<div id="team">
				<div className="text-center">
					<div className="heading">
						<h3>Meet the Team</h3>
					</div>
					<div className="d-flex">
						<div className="row justify-content-evenly w-75 mt-5 m-auto ">
							<div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
								<div className="user-picture hover-img">
									<img
										className="mb-0"
										src="https://avatars.githubusercontent.com/jgoyret"
										alt=""
									/>
								</div>
								<p className="name-client">
									{' '}
									Juan Goyret
									<span>Full stack developer</span>{' '}
									<span> King of the pirates</span>
								</p>
								<div className="social-media">
									<a href="https://github.com/jgoyret">
										<i className="bi bi-github text-black"></i>
										<span className="tooltip-social">Github</span>
									</a>
									<a href="https://www.linkedin.com/in/juan-goyret-892b422ab/?originalSubdomain=uy">
										<i className="bi bi-linkedin text-black"></i>{' '}
										<span className="tooltip-social">LinkedIn</span>
									</a>
								</div>
							</div>

							<div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
								<div className="user-picture hover-img">
									<img
										className="mb-0"
										src="https://avatars.githubusercontent.com/nachokapre"
										alt=""
									/>
								</div>
								<p className="name-client">
									{' '}
									Ignacio Kaprielian
									<span>Full stack developer</span> <span> King of flow</span>
								</p>
								<div className="social-media">
									<a href="https://github.com/nachokapre">
										<i className="bi bi-github text-black"></i>
										<span className="tooltip-social">Github</span>
									</a>
									<a href="https://www.linkedin.com/in/ignacio-kaprielian-elmasian-a03bb41b8/?originalSubdomain=uy">
										<i className="bi bi-linkedin text-black"></i>{' '}
										<span className="tooltip-social">LinkedIn</span>
									</a>
								</div>
							</div>
							<div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
								<div className="user-picture hover-img">
									<img
										className="mb-0"
										src="https://avatars.githubusercontent.com/sofiviera"
										alt=""
									/>
								</div>
								<p className="name-client">
									{' '}
									Sofía Viera
									<span>Full stack developer</span>{' '}
									<span> Queen of Nutrition</span>
								</p>
								<div className="social-media">
									<a href="https://github.com/sofiviera">
										<i className="bi bi-github text-black"></i>
										<span className="tooltip-social">Github</span>
									</a>
									<a href="https://www.linkedin.com/in/sof%C3%ADavierasosa/">
										<i className="bi bi-linkedin text-black"></i>{' '}
										<span className="tooltip-social">LinkedIn</span>
									</a>
								</div>
							</div>
							<div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
								<div className="user-picture hover-img">
									<img
										className="mb-0"
										src="https://avatars.githubusercontent.com/rodriguezadrian"
										alt=""
									/>
								</div>
								<p className="name-client">
									{' '}
									Adrián Rodríguez
									<span>Full stack developer</span> <span> King of code</span>
								</p>
								<div className="social-media">
									<a href="https://github.com/rodriguezadrian">
										<i className="bi bi-github text-black"></i>
										<span className="tooltip-social">Github</span>
									</a>
									<a href="https://www.linkedin.com/in/adrianrg99/">
										<i className="bi bi-linkedin text-black"></i>{' '}
										<span className="tooltip-social">LinkedIn</span>
									</a>
								</div>
							</div>
							<div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
								<div className="user-picture hover-img">
									<img
										className="mb-0"
										src="https://avatars.githubusercontent.com/Guillexxxs"
										alt=""
									/>
								</div>
								<p className="name-client">
									{' '}
									Guillermo Peri
									<span>Full stack developer</span> <span> King of booze</span>
								</p>
								<div className="social-media">
									<a href="https://github.com/Guillexxxs">
										<i className="bi bi-github text-black"></i>
										<span className="tooltip-social">Github</span>
									</a>
									<a href="https://www.linkedin.com/in/guille-peri-415214154/">
										<i className="bi bi-linkedin text-black"></i>{' '}
										<span className="tooltip-social">LinkedIn</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
