import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin, getLoadingUserStatus } from 'redux/Auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isUserLogin = useSelector(isLogin);
    const isRefreshing = useSelector(getLoadingUserStatus);
    const shouldRedirect = !isUserLogin && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}