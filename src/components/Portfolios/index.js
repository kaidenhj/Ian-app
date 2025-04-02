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
                    <ProjectH2>Utilities Database</ProjectH2>
                    <ProjectP>Ithaca College Utilities Database System and Google Drive UI</ProjectP>
                </ProjectCard>
                <ProjectCard to='/tameProject'>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>TAME</ProjectH2>
                    <ProjectP>Adolecent - Time Assessment and Managment Evaluation</ProjectP>
                </ProjectCard>
                <ProjectCard to='/satelliteProject'>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>SAM Habitat Distruction Model</ProjectH2>
                    <ProjectP>Tracking Suburban Habitat Loss: An ML Approach to Satellite Image Analysis</ProjectP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectContainer>
    );
}

export default Portfolio;