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

function About() {
  const steps = [
    {
      label: "Course extension",
      description: `El proyecto fue desarrollado en tan sólo 3 semanas, durante noviembre de 2022. El mismo se dividió en sprints (Scrum) de una semana de duración.`,
    },
    {
      label: "Technologies",
      description:
        "Para el Front-End del sitio se desarrolló una aplicación en React (usando Create-React-App) mientras que para el Back-End se desarrolló una REST API hecha con Node.js, Express, SQL y Git/GitHub.",
    },
    {
      label: "Distribution of tasks",
      description: `Para la organización de tareas durante el proyecto se utilizó Trello. Esto permitió que cada integrante del equipo estuviese permanentemente al tanto del estado del proyecto así como de las tareas que debía realizar.`,
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
        <div className="col-md-9" id="aboutText">
          <h1>About this project</h1>
          <p>
            The following e-commerce site is a project developed by students of
            the Coding Bootcamp at Hack Academy. The Bootcamp is an immersive
            and extremely practical program, consisting of a full-time schedule
            over 3 months. During this period, students invest more than 600
            hours in learning about Node.js, Express, React.js, SQL, MongoDB,
            and Git.
          </p>
        </div>
        <div id="stepper" className="col-md-3">
          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box>
                      <div>
                        <Button onClick={handleNext}>
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button disabled={index === 0} onClick={handleBack}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Button onClick={handleReset}>Reset</Button>
            )}
          </Box>
        </div>
      </div>
      <div id="team">
        <div className="text-center mt-5">
          <div className="heading">
            <h3>Meet the Team</h3>
          </div>
          <div className="d-flex justify-content-evenly mt-5">
            <div className="card-client">
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>{" "}
                  <span className="tooltip-social">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="card-client">
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>{" "}
                  <span className="tooltip-social">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="card-client">
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>{" "}
                  <span className="tooltip-social">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="card-client">
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>{" "}
                  <span className="tooltip-social">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="card-client">
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
                <a href="#">
                  <i className="bi bi-linkedin"></i>{" "}
                  <span className="tooltip-social">LinkedIn</span>
                </a>
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
