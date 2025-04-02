import React from "react";
import { PdfIframe, Icon, Container } from "./resumeElements";

const Resume = () => {
  return (
    <Container>
      <Icon to='/'>Ian Denshaw</Icon>
      <PdfIframe 
        title="resume document" 
        src="/architecture_student_resume.pdf">
      </PdfIframe>
    </Container>
  );
};

export default Resume;
