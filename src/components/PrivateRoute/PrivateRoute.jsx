import { Navigate, Outlet } from "react-router-dom";

import { isLogin } from "redux/Auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
    const isUserLogin = useSelector(isLogin);

    if (!isUserLogin) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}