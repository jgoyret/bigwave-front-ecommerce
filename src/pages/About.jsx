import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        <div>
          <h1>About this project</h1>
          <p>
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del Coding Bootcamp de Hack Academy. El Bootcamp es un
            programa educativo extremadamente práctico de 3 meses y full-time,
            donde los estudiantes invierten más de 600 horas a aprender sobre
            Node.js, Express, React.js, SQL, MongoDB y Git.
          </p>
        </div>
        <div id="stepper">
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
          <h3>Team</h3>
          <div className="d-flex justify-content-evenly mt-5">
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Gluten-Free-1.png"
                alt=""
              />
              <h5>Nuts, cereals and seeds</h5>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Gluten-Free-1.png"
                alt=""
              />
              <h5>Nuts, cereals and seeds</h5>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Organic-1.png"
                alt=""
              />
              <h5>Sugars and substitutes</h5>
              <p>
                <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
              </p>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Plant-Based-1.png"
                alt=""
              />
              <h5>Dairy, plant based milk</h5>
              <p>
                <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
              </p>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Keto-1.png"
                alt=""
              />
              <h5>Pantry & spices</h5>
              <p>
                <i class="bi bi-linkedin"></i> <i class="bi bi-github"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
