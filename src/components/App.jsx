import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLoadingUserStatus } from "redux/Auth/auth-selectors";
import { current } from '../redux/Auth/auth-operations';
import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute }  from "./RestrictedRoute";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"))
const RegisterPage = lazy(() => import("../Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../Pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../Pages/ContactPage/ContactsPage"));


export const App = () => {

  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch])
  
  return isLoadingUser ? (
    <b>Refreshing...</b>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
          />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
      )}
  
