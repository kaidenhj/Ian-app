import React from "react";
import ProjectPage from "../components/ProjectPage";
import { projectObjOne } from "../components/ProjectPage/data";

const UtilitiesProjectPage = () => {
  return (
    <ProjectPage {...projectObjOne} />
  );
}

export default UtilitiesProjectPage;
