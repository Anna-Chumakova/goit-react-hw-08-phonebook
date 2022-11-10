import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";


const RegisterPage = lazy(() => import("./Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./Pages/ContactPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                <Route element={<PrivateRoute />} >
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />    
            </Routes>
        </Suspense>
    )

}

export default UserRoutes;