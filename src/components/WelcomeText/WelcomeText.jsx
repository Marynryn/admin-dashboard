import React from 'react'
import styled from 'styled-components';
import loginImage from '../../img/img/tablet.png';
const Title = styled.h1`
margin-top: 0;
margin-bottom: 40px;
    font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 34px;
@media(min-width: 768px) {
     font-size: 54px;
     line-height: 60px;
}
 `;
const Image = styled.img`
position: absolute;
right: 25px;
top:-56px;
    width: 95px;
height: 93px;
  @media(min-width: 768px) {
width: 179px;
height: 175px;
top: -105px;
right: 45px;
}
`;
const Container = styled.div`
    position: relative;
      @media(min-width: 768px) {
width: 614px;
}
`;
const WelcomeText = () => {
    return (
        <Container  >
            <Image src={loginImage} alt='tablet' />
            <Title>Your medication, delivered Say goodbye to all<span style={{ color: "var(--green)" }}> your healthcare </span> worries with us</Title>
        </Container>
    )
}
export default WelcomeText;  