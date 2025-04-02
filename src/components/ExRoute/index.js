import React from "react";
import { Container, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./exElements";

const ExRoute = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'>Kaiden Jones</Icon>
            <Form>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required />
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot password</Text>
            </Form>
        </FormWrap>
      </Container>
    </>
  );
}


export default ExRoute;


