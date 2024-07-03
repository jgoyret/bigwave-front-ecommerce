import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/AboutUs.css";

import NavBarApp from "../components/NavBarApp";
import Footer from "../components/Footer";
import { colors } from "@mui/material";

function About() {
  const steps = [
    {
      label: "Course extension",
      description:
        "The project was developed in just 3 weeks, during July 2024. It was divided into one-week-long sprints (Scrum).",
    },
    {
      label: "Technologies",
      description:
        "For the Front-End of the site, an application was developed in React (using Create-React-App), while for the Back-End a REST API was developed with Node.js, Express, SQL, and Git/GitHub.",
    },
    {
      label: "Distribution of tasks",
      description:
        "For task organization during the project, Trello was used. This allowed each team member to always be aware of the project's status as well as the tasks they needed to complete.",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <NavBarApp />
      <div className="container d-flex mt-5">
        <div className="row">
          <div className="col-12 col-md-8" id="aboutText">
            <h1>About this project</h1>
            <p>
              The following e-commerce site is a project developed by students
              of the Coding Bootcamp at Hack Academy. The Bootcamp is an
              immersive and extremely practical program, consisting of a
              full-time schedule over 3 months. During this period, students
              invest more than 600 hours in learning about Node.js, Express,
              React.js, SQL, MongoDB, and Git.
            </p>
          </div>
          <div id="stepper" className="col-12 col-md-4">
            <Box>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      StepIconProps={{
                        sx: {
                          color: "green",
                        },
                      }}
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box>
                        <div>
                          <Button onClick={handleNext} sx={{ color: "green" }}>
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ color: "green", ml: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Button sx={{ color: "green" }} onClick={handleReset}>
                  Reset
                </Button>
              )}
            </Box>
          </div>
        </div>
      </div>
      <div id="team">
        <div className="text-center mt-5">
          <div className="heading">
            <h3>Meet the Team</h3>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="user-picture">
                  <img
                    className=""
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
                  <a href="https://github.com/jgoyret">
                    <i className="bi bi-github"></i>
                    <span className="tooltip-social">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/juan-goyret-892b422ab/?originalSubdomain=uy">
                    <i className="bi bi-linkedin"></i>{" "}
                    <span className="tooltip-social">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="user-picture">
                  <img
                    className=""
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
                  <a href="https://github.com/nachokapre">
                    <i className="bi bi-github"></i>
                    <span className="tooltip-social">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/ignacio-kaprielian-elmasian-a03bb41b8/?originalSubdomain=uy">
                    <i className="bi bi-linkedin"></i>{" "}
                    <span className="tooltip-social">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="user-picture">
                  <img
                    className=""
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
                  <a href="https://github.com/sofiviera">
                    <i className="bi bi-github"></i>
                    <span className="tooltip-social">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sof%C3%ADavierasosa/">
                    <i className="bi bi-linkedin"></i>{" "}
                    <span className="tooltip-social">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="user-picture">
                  <img
                    className=""
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
                  <a href="https://github.com/rodriguezadrian">
                    <i className="bi bi-github"></i>
                    <span className="tooltip-social">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/adrianrg99/">
                    <i className="bi bi-linkedin"></i>{" "}
                    <span className="tooltip-social">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="card-client col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                <div className="user-picture">
                  <img
                    className=""
                    src="https://avatars.githubusercontent.com/Guillexxxs"
                    alt=""
                  />
                </div>
                <p className="name-client">
                  {" "}
                  Guillermo Peri
                  <span>Full stack developer</span> <span> King of booze</span>
                </p>
                <div className="social-media">
                  <a href="https://github.com/Guillexxxs">
                    <i className="bi bi-github"></i>
                    <span className="tooltip-social">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/guille-peri-415214154/">
                    <i className="bi bi-linkedin"></i>{" "}
                    <span className="tooltip-social">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
