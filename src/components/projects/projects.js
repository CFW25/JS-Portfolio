import React from "react"
import styled from "styled-components"
import ProjectCard from "./projectCard";

//Projects
const ProjectCont = styled.div`
    text-align:center;
    padding: 0 3rem;
    padding-bottom: 1rem;
    background: #45567d;
`;
const CardCont = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-gap:4rem;
    width:100%;
    max-width: 1280px;
    margin: 0 auto;
    @media only screen and (min-width: 760px){
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
`;
const ProjHeader = styled.h2`
    max-width: 760px;
    margin: 0 auto 6rem auto;
    border-bottom: 0.5rem solid #f0f0f0;
    @media only screen and (min-width: 760px){
    font-size: 4rem;}
`;


const Projects = () => (
    <ProjectCont id="projects">
        <ProjHeader>These are some of my projects</ProjHeader>
        <CardCont>
            <ProjectCard link="https://home-roast.netlify.com/"
                        source="https://i.ibb.co/nCXXrdC/Coffee-Website.jpg"
                        children="Coffee Website Mockup"/>
            <ProjectCard link="https://cfw25.github.io/roboreact/"
                        source="https://i.ibb.co/sqtRMhK/Robo-React.jpg"
                        children="Robot React Project"/>
            <ProjectCard link="https://adventour.netlify.com/"
                        source="https://i.ibb.co/Npn1ys0/Travel-Website.jpg"
                        children="Travel Website Mockup"/>
            <ProjectCard link="https://github.com/CFW25/JS-Challenges"
                        source="https://i.ibb.co/WszWnx7/JSChallenges.jpg"
                        children="Javascript Challenges"/>
            <ProjectCard link="https://cfw25.github.io/LightsOutReact/"
                        source="https://i.ibb.co/t4xDb5C/Lights-Out.png"
                        children="LightsOut React"/>
            <ProjectCard link="https://cfw25.github.io/Dadjokes/"
                        source="https://i.ibb.co/PC8bcfF/Dadjokes.png"
                        children="Dad Jokes"/>
        </CardCont>
    </ProjectCont>
);

export default Projects

