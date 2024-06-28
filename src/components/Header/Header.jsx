
import Line from 'components/Line/Line';
import Logo from 'components/Loader/Logo/Logo';
import SubTitle from 'components/SubTitle/SubTitle';
import Title from 'components/Title/Title';
import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'store/selectors';
import styled from 'styled-components';


const Container = styled("div")`
    display: flex;
    justify-content: center;
    
  `
const Header = () => {
    const location = useLocation();
    const user = useSelector(selectUser);
    console.log(location)
    return (
        <Container>
            <Logo />
            <div>
                <Title />
                <Container>
                    <SubTitle>{location.path}</SubTitle>
                    <Line />
                    <SubTitle> {user.email}</SubTitle>
                </Container>
            </div>

        </Container>
    )
}
export default Header;