import React from "react";
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectIcon,
    ProjectSection, ProjectH2, ProjectText,
    ProjectColumns, Column1, Column2, ProjectList, Item, Icon} from "./projectPageElements";

const ProjectPage = ({lightbg, id, headline, img, description, link, tech, roles, challenges, solutions, tldr}) => {
    return (
        <ProjectContainer lightbg={lightbg} id={id}>
            <Icon to='/'>Ian Denshaw</Icon>
            <ProjectWrapper>
                <ProjectH1>{headline}</ProjectH1>
                <ProjectIcon src={img} /> 
                <ProjectSection>
                    <ProjectH2>TLDR:</ProjectH2>
                    <ProjectText>{tldr}</ProjectText>
                </ProjectSection>
                <ProjectSection>
                    <ProjectH2>Description:</ProjectH2>
                    <ProjectText>{description}</ProjectText>
                </ProjectSection>
                <ProjectColumns>
                    <Column1>
                        <ProjectH2>Technology Used:</ProjectH2>
                        <ProjectList>
                            {tech.map((item, index) => {
                                return <Item key={index}>{item}</Item>
                            })}
                        </ProjectList>
                    </Column1>
                    <Column2>
                        <ProjectH2>Role:</ProjectH2>
                        <ProjectList>
                            {roles.map((item, index) => {
                                    return <Item key={index}>{item}</Item>
                            })}
                        </ProjectList>
                    </Column2>
                </ProjectColumns>
                <ProjectSection>
                    <ProjectH2>Challenges:</ProjectH2>
                    <ProjectText>{challenges}</ProjectText>
                </ProjectSection>
                <ProjectSection>
                    <ProjectH2>Solutions:</ProjectH2>
                    <ProjectText>{solutions}</ProjectText>
                </ProjectSection>
            </ProjectWrapper>
        </ProjectContainer>
    );
};

export default ProjectPage;