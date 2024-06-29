
import Line from 'components/Line/Line';
import Logo from 'components/Loader/Logo/Logo';
import SubTitle from 'components/SubTitle/SubTitle';
import Title from 'components/Title/Title';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'store/selectors';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg'
import Modal from 'components/Modal/Modal';
import Sidebar from 'components/Sidebar/Sidebar';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import LogOutButton from 'components/LogOutButton/LogOutButton';

const ContainerLogo = styled("div")`
    display: flex;
    justify-content: center;
    gap: 20px;
    @media(min-width: 768px) {
  gap: 32px;
}
    
  `;
const Container = styled("div")`
    display: flex;
    justify-content: flex-start;
gap: 20px;
   @media(min-width: 768px) {
  gap: 16px;
}
   @media(min-width: 1440px) {
    justify-content: space-between;
}
 `;
const ContainerTitle = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
 `;
const BurgerContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
      @media(min-width: 1440px) {
  display: none;}
 `;
const ContainerLogOut = styled("div")` 
   display: none;
      @media(min-width: 1440px) { 
        display: flex;
    justify-content: center;
    align-items: center;
 }
 `;
const Button = styled("button")`
   border: none;
    background-color: transparent; 
    outline: none;
    &:hover{
        scale: 1.03;
    }
 `;

const getRouteLabel = (pathname) => {
    switch (pathname) {
        case '/dashboard':
            return 'Dashboard';
        case '/orders':
            return ' All orders';
        case '/customers':
            return ' All customers';
        case '/suppliers':
            return ' All suppliers';
        case '/products':
            return ' All products';
        default:
            return 'Not found';
    }
};
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation();
    const user = useSelector(selectUser);

    const routeLabel = getRouteLabel(location.pathname);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (<>
        <Container >
            <BurgerContainer>
                <Button type='button' onClick={toggleModal}>
                    <svg width={32} height={32} style={{ stroke: "var(--main-black)", strokeWidth: 1 }}>
                        <use href={`${sprite}#icon-burger`}></use>
                    </svg></Button>
            </BurgerContainer>
            <ContainerLogo>
                <Logo />
                <div>
                    <Title />
                    <ContainerTitle>
                        <SubTitle>{routeLabel}</SubTitle>
                        <Line />
                        <SubTitle> {user.email}</SubTitle>
                    </ContainerTitle>
                </div>

            </ContainerLogo >
            <ContainerLogOut>
                <LogOutButton />
            </ContainerLogOut>
        </Container>
        <MobileMenu isOpen={modalOpen} onClose={setModalOpen}>

            <Sidebar />
            <LogOutButton />

        </MobileMenu>

    </>
    )
}
export default Header;