import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import "../styles/AboutUs.css";
import IconCarousel from "../components/IconCarousel";
import { Link } from "react-router-dom";

function About() {
  const steps = [
    {
      label: "Course extension",
      description:
        "The project was developed in just <strong> 3 weeks </strong>, during July 2024. It was divided into one-week-long sprints (Scrum).",
    },
    {
      label: "Technologies",
      description:
        "For the Front-End of the site, an application was developed in <strong>React</strong> (using Create-React-App), while for the Back-End a REST API was developed with <strong>Node.js</strong>, <strong>Express</strong>, <strong>SQL</strong>, and Git/GitHub.",
    },
    {
      label: "Distribution of tasks",
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
                months. During this period, students invest more than{" "}
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

        <div className="heading">
          <h3>Our Tools</h3>
        </div>
        <div className="container-fluid" id="icons">
          <div className="mt-5">
            <IconCarousel />
          </div>
        </div>

        <div className="heading">
          <h3>Design</h3>
        </div>
        <div className="container mt-5">
          <div className="row design-container">
            <div className="col col-md-6">
              <p>Color palette</p>
              <div className="d-flex justify-content-center">
                <img
                  className="color-palette-image"
                  src="/color-palette.png"
                  alt="color palette"
                />
              </div>
            </div>
            <div className="col col-md-6">
              <p className="mb-4">Typography</p>
              <h4>Aa</h4>
              <h6>Axiforma</h6>
            </div>
          </div>
        </div>
        <div id="team">
          <div className="text-center">
            <div className="heading">
              <h3>Meet the Team</h3>
            </div>
            <div id="div-team" className="d-flex justify-content-evenly">
              <div className="row mt-5">
                <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                  <div className="user-picture hover-img">
                    <img
                      className="mb-0"
                      src="https://avatars.githubusercontent.com/jgoyret"
                      alt=""
                    />
                  </div>
                  <p className="name-client">
                    {" "}
                    Juan Goyret
                    <span>Full stack developer</span>{" "}
                    <span> King of the pirates</span>
                  </p>
                  <div className="social-media">
                    <Link to="https://github.com/jgoyret">
                      <i className="bi bi-github text-black"></i>
                      <span className="tooltip-social">Github</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/juan-goyret-892b422ab/?originalSubdomain=uy">
                      <i className="bi bi-linkedin text-black"></i>{" "}
                      <span className="tooltip-social">LinkedIn</span>
                    </Link>
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
                    {" "}
                    Ignacio Kaprielian
                    <span>Full stack developer</span> <span> King of flow</span>
                  </p>
                  <div className="social-media">
                    <Link to="https://github.com/nachokapre">
                      <i className="bi bi-github text-black"></i>
                      <span className="tooltip-social">Github</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ignacio-kaprielian-elmasian-a03bb41b8/?originalSubdomain=uy">
                      <i className="bi bi-linkedin text-black"></i>{" "}
                      <span className="tooltip-social">LinkedIn</span>
                    </Link>
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
                    {" "}
                    Sofía Viera
                    <span>Full stack developer</span>{" "}
                    <span> Queen of Nutrition</span>
                  </p>
                  <div className="social-media">
                    <Link to="https://github.com/sofiviera">
                      <i className="bi bi-github text-black"></i>
                      <span className="tooltip-social">Github</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/sof%C3%ADavierasosa/">
                      <i className="bi bi-linkedin text-black"></i>{" "}
                      <span className="tooltip-social">LinkedIn</span>
                    </Link>
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
                    {" "}
                    Adrián Rodríguez
                    <span>Full stack developer</span> <span> King of code</span>
                  </p>
                  <div className="social-media">
                    <Link to="https://github.com/rodriguezadrian">
                      <i className="bi bi-github text-black"></i>
                      <span className="tooltip-social">Github</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/adrianrg99/">
                      <i className="bi bi-linkedin text-black"></i>{" "}
                      <span className="tooltip-social">LinkedIn</span>
                    </Link>
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
                    {" "}
                    Guillermo Peri
                    <span>Full stack developer</span>{" "}
                    <span> King of booze</span>
                  </p>
                  <div className="social-media">
                    <Link to="https://github.com/Guillexxxs">
                      <i className="bi bi-github text-black"></i>
                      <span className="tooltip-social">Github</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/guille-peri-415214154/">
                      <i className="bi bi-linkedin text-black"></i>{" "}
                      <span className="tooltip-social">LinkedIn</span>
                    </Link>
                  </div>
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
