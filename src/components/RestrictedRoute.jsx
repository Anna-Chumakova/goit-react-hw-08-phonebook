import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from 'redux/Auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isUserLogin = useSelector(isLogin);
  return isUserLogin ? <Navigate to={redirectTo} /> : Component;
};