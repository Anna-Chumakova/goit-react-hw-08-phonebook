import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
        
    );
};
