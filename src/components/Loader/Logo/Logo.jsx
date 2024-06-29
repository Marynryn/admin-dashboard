import React from 'react'
import styled from 'styled-components';
// import sprite from '../../../img/svg/symbol-defs.svg'
import logoImage from '../../../img/img/logo.png';
import logoImage2 from '../../../img/img/logo2.png';
import { useLocation } from 'react-router-dom';
const Image = styled("img")`
       width: ${({ isLoginPage }) => (isLoginPage ? '44px' : '32px')};
  height: ${({ isLoginPage }) => (isLoginPage ? '44px' : '32px')};
  @media(min-width: 768px) {
      width: ${({ isLoginPage }) => (isLoginPage ? '44px' : '40px')};
  height: ${({ isLoginPage }) => (isLoginPage ? '44px' : '40px')};
}
`;
const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
   
`;


const Logo = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login"
    const imageLogo = isLoginPage ? logoImage : logoImage2
    return (
        <Container>

            <Image src={imageLogo} alt='logo' />
        </Container>
    )
}
export default Logo;