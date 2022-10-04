import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.jpg"
import ecom from "../../Assets/Projects/ecom.jpg";
import webseries from "../../Assets/Projects/webseries.jpg"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple"> Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={portfolio}
                            title="Portfolio"
                            description="The portfolio website is built with React.js. It has been shown in my personal details. It has highly featured to connect to GitHub to show my GitHub commit. and also shows my project with a GitHub link. it has shown my CV, and also downloaded my CV. It has shown also my used Tools and shown my Professional Skills."
                            ghLink="https://github.com/mdashik7723/Portfolio"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ecom}
                            title="E-Commerce"
                            description="E-Commerce website to buy any kind of products and contact us via email for any kind of information. it is built on React.js, Style-Component, ContextAPI, and Formspree. Have features that allow users for buying products and also doing product filters with price and product category."
                            ghLink="https://github.com/mdashik7723/ecommerce"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={webseries}
                            title="Web Series"
                            description="The web series website is built by React.js and styled with Bootstrap. It has been showing the best Five web series. It has also been linked with Netflix. You can see the web series on the Netflix website when you click on the see button."
                            ghLink="https://github.com/mdashik7723/Best-5-Netflix-Web-Series"
                            demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
