import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';


const Container = styled('div')`
   padding: 17px 20px 20px;
`;
const SidebarContainer = styled('div')`
display: none;
   @media(min-width: 1440px) {
display: block;
}
`;
export const Layout = () => {


    return (
        <Container  >

            <Suspense fallback={<Loader />}>
                <Header />
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>

                <Outlet />


            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    );
};