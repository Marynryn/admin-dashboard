import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


const Registration = lazy(() => import('../pages/Registration/Registration'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const Customers = lazy(() => import('../pages/Customers/Customers'));
const Suppliers = lazy(() => import('../pages/Suppliers/Suppliers'));
const Products = lazy(() => import('../pages/Products/Products'));

export const App = () => {

  return (

    <Routes>
      <Route path="/login" element={
        <RestrictedRoute redirectTo="/" component={<Registration />} />
      } />
      <Route path="/" element={<PrivateRoute component={<Layout />} redirectTo="/login" />} >

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




        {/* <Route path="/:id/participants" element={<Participants />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

    </Routes>
  );
};
