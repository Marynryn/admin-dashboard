import Logo from "components/Logo/Logo";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import WelcomeText from "components/WelcomeText/WelcomeText";
import styled from "styled-components";
import Image from "img/img/elements.webp"
import RetinaImage from "img/img/elements2x.webp"
const Container = styled.div`
    padding: 24px 20px;
height: 100%;
    background-color: var(--background-2);
      position: relative;
    overflow: hidden; 

    &::before {
        content: "";
        position: absolute;
        background-image: url(${Image});
        width: 464px;
        height: 345px;
        background-position: bottom right;
        background-size: cover;
        background-repeat: no-repeat;
         bottom: -200px;
        right:-180px ;
        @media (min-resolution: 2dppx){
 background-image: url(${RetinaImage});
        }
         @media (min-width: 768px){
  bottom: -100px;
       
         }
   
    }
     @media(min-width:375px){
width: 375px;
margin: 0 auto;
     }
       @media(min-width: 768px) {
 padding: 24px 32px;
 width: 768px;
}
       @media(min-width: 1440px) {
 padding: 28px 100px;
  width: 1440px;
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
