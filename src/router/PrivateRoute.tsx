// PrivateRoute.tsx
import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogined } from '@/service/auth/Index';

interface OwnProps {
    children?: ReactElement;
}

const PrivateRoute = () => {
    console.log('PrivateRoute', isLogined);
    // const [loginChk, setLoginChk] = useState(false);

    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         const loggedIn = await isLogined;
    //         setLoginChk(loggedIn);
    //     };

    //     checkLoginStatus();
    // }, []);

    return isLogined ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
