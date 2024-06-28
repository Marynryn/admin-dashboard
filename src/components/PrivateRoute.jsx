import { IsLoggedIn } from "../helpers/isLoggedIn";
import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogIn } = IsLoggedIn();


    return !isLogIn ? <Navigate to={redirectTo} /> : Component;
};