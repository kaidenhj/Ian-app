import React from "react";
import ProjectPage from "../components/ProjectPage";
import { projectObjTwo } from "../components/ProjectPage/data";

const TameProjectPage = () => {
  return (
    <ProjectPage {...projectObjTwo} />
  );
}

export default TameProjectPage;