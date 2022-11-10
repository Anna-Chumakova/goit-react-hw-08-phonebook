import UserRoutes from "UserRoutes";
import Navbar from "./Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLoadingUserStatus } from "redux/Auth/auth-selectors";
import { current } from '../redux/Auth/auth-operations';

export const App = () => {

  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch])
  
  return (
    <div>
      {isLoadingUser ? <p>Loading...</p> : (
        <>
          <Navbar />
          <UserRoutes />
        </>
      )}
      
    </div>
  );
};
