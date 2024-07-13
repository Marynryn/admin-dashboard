
import { Navigate } from 'react-router-dom';
import { IsLoggedIn } from '../helpers/isLoggedIn';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogIn } = IsLoggedIn();

    return !isLogIn ? Component : <Navigate to={redirectTo} />;
};