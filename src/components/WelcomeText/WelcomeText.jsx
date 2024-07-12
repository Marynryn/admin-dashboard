import React from 'react'
import styled from 'styled-components';
import loginImageMobile from 'img/img/mobile/white-round-pill-1x.webp';
import loginImageMobile2 from 'img/img/mobile/white-round-pill-2x.webp';
import loginImageTablet from 'img/img/tablet/white-round-pill-1x.webp';
import loginImageTablet2 from 'img/img/tablet/white-round-pill-2x.webp';
import loginImageDesktop from 'img/img/desktop/white-round-pill-1x.webp';
import loginImageDesktop2 from 'img/img/desktop/white-round-pill-2x.webp';

const Title = styled.h1`

margin-top: 0;
margin-bottom: 40px;
    font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 34px;
  @media(min-width: 375px){
     font-size: 30px;
  }
@media(min-width: 768px) {
     font-size: 54px;
     line-height: 60px;
}
 `;
const Image = styled.picture`


position: absolute;
right: 5px;
top:15px;
    width: 65px;
height: 63px;
  @media(min-width: 330px){
right: -5px;
top:-56px;
    width: 95px;
height: 93px;
  }
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
      <Image>
        <source
          srcSet={`
    ${loginImageMobile} 1x, 
    ${loginImageMobile2} 2x
  `}
          media="(min-width: 375px)"
        />
        <source
          srcSet={`
    ${loginImageTablet} 1x, 
    ${loginImageTablet2} 2x
  `}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`
    ${loginImageDesktop} 1x, 
    ${loginImageDesktop2} 2x
  `}
          media="(min-width: 1440px)"
        />
        <img src={loginImageTablet} alt="tablet" />
      </Image>
      <Title>Your medication, delivered Say goodbye to all<span style={{ color: "var(--green)" }}> your healthcare </span> worries with us</Title>
    </Container>
  )
}
export default WelcomeText;  