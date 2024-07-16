import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tippy from "@tippyjs/react"; // Asegúrate de tener esta librería instalada
import "tippy.js/dist/tippy.css"; // Asegúrate de tener esta librería instalada

import reactLogo from "../assets/reactjs-icon.svg";
import nodeLogo from "../assets/nodejs-icon.svg";
import expressLogo from "../assets/expressjs-icon.svg";
import sqlLogo from "../assets/mysql-icon.svg";
import gitLogo from "../assets/github-icon-2.svg";
import trelloLogo from "../assets/trello.svg";
import materialLogo from "../assets/devicon--materialui.svg";
import jwtLogo from "../assets/icons8-jwt.svg";
import excalidrawLogo from "../assets/excalidraw.svg";
import reactBootstrapLogo from "../assets/react-bootstrap.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import htmlLogo from "../assets/HTML5.svg";
import cssLogo from "../assets/CSS3.svg";
import viteLogo from "../assets/Vite.js.svg";
import sequelizeLogo from "../assets/Sequelize.svg";
import reduxLogo from "../assets/redux.svg";
import jsLogo from "../assets/JavaScript.svg";

const logos = [
  {
    src: htmlLogo,
    alt: "HTML logo",
    content:
      "HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It’s a combination of Hypertext, which defines the link between web pages, and Markup language, which is used to define the text document within tags to structure web pages.",
  },
  {
    src: cssLogo,
    alt: "CSS logo",
    content:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    src: jsLogo,
    alt: "JavaScript logo",
    content:
      "JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages.",
  },
  {
    src: viteLogo,
    alt: "Vite logo",
    content:
      "Vite is a frontend tool that is used for building fast and optimized web applications. It uses a modern build system and a fast development server to provide a streamlined and efficient development experience.",
  },
  {
    src: reactLogo,
    alt: "React logo",
    content:
      "React is used to develop the project's user interface, facilitating the creation of dynamic and interactive components. In addition, it allows the development of single-page applications and optimizes the rendering of the page via the virtual DOM.",
  },
  {
    src: reduxLogo,
    alt: "Redux logo",
    content:
      "Redux is a predictable state container for JavaScript apps. It centralizes application state, ensuring consistency and manageability, especially in complex React applications.",
  },
  {
    src: nodeLogo,
    alt: "Node.js logo",
    content:
      "Node.js provides the runtime environment for running JavaScript on the server, supporting the execution of backend logic and serving as the foundation upon which frameworks like Express are built.",
  },
  {
    src: gitLogo,
    alt: "GitHub logo",
    content:
      "GitHub is a web-based platform used for version control and collaborative software development. It hosts Git repositories and provides tools to facilitate project management, collaboration, and code sharing among team members.",
  },
  {
    src: trelloLogo,
    alt: "Trello logo",
    content:
      "Trello is a web-based project management tool that utilizes boards, lists, and cards to help teams organize and prioritize tasks and projects in a visual manner. It is particularly useful for agile development methodologies and collaborative project management.",
  },
  {
    src: excalidrawLogo,
    alt: "Excalidraw logo",
    content:
      "Excalidraw is a collaborative virtual whiteboard tool that allows teams to sketch diagrams, wireframes, and visual concepts directly in the web browser. We used it to prototype the project's user interface and plan the layout of the site.",
  },
  {
    src: expressLogo,
    alt: "Express logo",
    content:
      "Express handles database queries to MySQL, serve API routes, manage authentication with JWT, and provide data to the frontend built with React.",
  },
  {
    src: jwtLogo,
    alt: "JWT logo",
    content:
      "JWTs are used for authentication, where upon successful login, a JWT containing user information and roles is issued. This token is then sent with subsequent API requests to authorize access to protected resources or endpoints.",
  },
  {
    src: materialLogo,
    alt: "Material-UI logo",
    content:
      "Material-UI is used to build the frontend user interface, leveraging its rich set of components to create a cohesive and visually appealing design. It helps in maintaining a consistent design language across the application and speeds up development by providing robust, tested components.",
  },
  {
    src: sqlLogo,
    alt: "MySQL logo",
    content:
      "MySQL is used to store and manage data related to users, products, orders, and other entities required by the application. It facilitates efficient data storage, retrieval, and management through SQL queries, ensuring reliable and scalable data handling for your web application.",
  },
  {
    src: sequelizeLogo,
    alt: "Sequelize logo",
    content:
      "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.",
  },
  {
    src: reactBootstrapLogo,
    alt: "React Bootstrap logo",
    content:
      "React Bootstrap is a library of reusable components that can be used to build web applications. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.",
  },
  {
    src: bootstrapLogo,
    alt: "Bootstrap Icons logo",
    content:
      "Bootstrap Icons is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not.",
  },
];

const IconCarousel = () => {
  return (
    <Carousel>
      {logos
        .reduce((acc, logo, idx) => {
          if (idx % 6 === 0) acc.push([]);
          acc[acc.length - 1].push(logo);
          return acc;
        }, [])
        .map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-evenly">
              {group.map((logo, i) => (
                <Tippy key={i} placement="right" content={logo.content}>
                  <img src={logo.src} className="iconStyle" alt={logo.alt} />
                </Tippy>
              ))}
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default IconCarousel;
