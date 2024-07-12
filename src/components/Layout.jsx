import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';


const Container = styled('div')`
   padding: 17px 15px 20px 15px;

        @media(min-width: 375px) {
width: 375px;
margin: 0 auto;
   padding: 17px 20px 20px;
 

   box-sizing: border-box;}
    @media(min-width: 768px) {
 padding: 15px 32px 40px 32px;
width: 768px;


    }

        @media(min-width: 1440px) {
 padding: 15px 40px 40px 18px;
width: 1440px;


    }
`;

export const Layout = () => {


    return (
        <Container  >


            <Header />

            <div style={{ display: "flex", }}>

                <Sidebar />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>

            <Toaster position="top-right" reverseOrder={false} />
        </Container >
    );
};