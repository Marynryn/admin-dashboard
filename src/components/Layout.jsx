import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';


const Container = styled('div')`
   padding: 17px 20px 20px;
   min-height: 100vh;
`;


export const Layout = () => {


    return (
        <Container  >

            <Suspense fallback={<Loader />}>
                <Header />
                <div style={{ display: "flex", height: "calc(100vh - 105px )" }}>
                    <Sidebar />


                    <Outlet />

                </div>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    );
};