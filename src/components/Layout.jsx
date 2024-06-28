import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export const Layout = () => {


    return (
        <div  >

            <Suspense fallback={<Loader />}>
                <Header />
                <Sidebar />
                <Outlet />


            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};