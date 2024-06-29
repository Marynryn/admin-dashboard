import SidebarMenu from 'components/SidebarMenu/SidebarMenu';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: none;
   
      @media(min-width: 1440px) {
    display: flex;
     position: relative;
    padding-top: 40px ;
    padding-right: 18px;
    height: 100%;
    width: 62px;
}
     
`;
const Line = styled.div`
      content: '';
       position: absolute;
       top:0;
        bottom: -20px; 
       width: 1px;
        right:0;
        height: calc(100vh - 85px); 
        background-color: rgba(29, 30, 33, 0.10); 
`
const Sidebar = () => {
    return (
        <Container>
            <SidebarMenu />
            <Line />
        </Container>
    )
}
export default Sidebar;