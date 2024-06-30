import Logo from "components/Logo/Logo";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import WelcomeText from "components/WelcomeText/WelcomeText";
import styled from "styled-components";

const Container = styled.div`
    padding: 24px 20px;
    background-color: var(--background-2);
       @media(min-width: 768px) {
 padding: 24px 32px;
}
       @media(min-width: 1440px) {
 padding: 28px 100px;
}
`;
const ContainerLogo = styled.div`
   display: flex;
   gap:14px;
   align-items: flex-start;
`;
const FormContainer = styled.div`
margin-top: 148px;
   @media(min-width: 768px) {
margin-top: 204px;
}
   @media(min-width: 1440px) {
display: flex;
gap: 150px;
margin-top: 226px;
}
`;
const LogoTitle = styled.h3`
font-size:20px;
`;

export default function Registration() {

    return (
        <Container >
            <ContainerLogo>
                <Logo />
                <LogoTitle>E-Pharmacy</LogoTitle>
            </ContainerLogo>
            <FormContainer>
                <WelcomeText />
                <RegistrationForm />
            </FormContainer>
        </Container>
    );
}
