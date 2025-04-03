import React from "react";
import { ProjectContainer, ProjectsH1, ProjectsWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP } from "./projectElements";
import Icon1 from "../../images/project-1.jpg";
import Icon2 from "../../images/project-2.jpg"; 
import Icon3 from "../../images/project-3.jpg";

const Portfolio = () => {
    return (
        <ProjectContainer id="portfolio">
            <ProjectsH1>Portfolio</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard to='/utilitiesProject'>
                    <ProjectIcon src={Icon1} />
                    <ProjectH2>Project 1</ProjectH2>
                    <ProjectP>Description of project 1</ProjectP>
                </ProjectCard>
                <ProjectCard to='/tameProject'>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>Project 2</ProjectH2>
                    <ProjectP>Description of project 2</ProjectP>
                </ProjectCard>
                <ProjectCard to='/satelliteProject'>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>Project 3</ProjectH2>
                    <ProjectP>Description of project 3</ProjectP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectContainer>
    );
}

export default Portfolio;