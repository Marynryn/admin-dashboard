import { Route, Routes, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Loader from './Loader/Loader';


const Registration = lazy(() => import('../pages/Registration/Registration'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const Customers = lazy(() => import('../pages/Customers/Customers'));
const Suppliers = lazy(() => import('../pages/Suppliers/Suppliers'));
const Products = lazy(() => import('../pages/Products/Products'));
const Layout = lazy(() => import('./Layout'));
export const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/" component={<Registration />} />
        } />
        <Route path="/" element={<PrivateRoute component={<Layout />} redirectTo="/login" />} >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={<Dashboard />} />
          <Route
            path="/orders"
            element={<Orders />} />
          <Route
            path="/customers"
            element={<Customers />} />
          <Route
            path="/suppliers"
            element={<Suppliers />} />
          <Route
            path="/products"
            element={<Products />} />




          <Route path="*" element={<Navigate to="/" />} />
        </Route>

      </Routes>
    </Suspense>
  );
};
