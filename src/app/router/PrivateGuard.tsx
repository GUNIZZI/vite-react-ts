import { Outlet } from 'react-router-dom';
import { userStore } from '../store/user';
import { useEffect, useState } from 'react';

const PrivateGuard = () => {
    // const { name } = userStore();

    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //         while (!!name === false) {
    //             await new Promise((resolve) => setTimeout(resolve, 100));
    //         }
    //         return <Outlet />;
    //     };
    //     checkAuthentication();
    // }, [name]);
    // useEffect(() => {
    //     if (!userStore.getState().getUser()) alert('관리자만 접근 가능한 페이지 입니다.');
    // }, []);

    // return userStore.getState().getUser() ? <Outlet /> : <Navigate to="/login" replace />;

    const { name } = userStore();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            while (!name) {
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
            setIsAuthenticated(true);
        };
        checkAuthentication();
    }, [name]);

    console.log('guard');

    if (!isAuthenticated) {
        console.log('go null');
        // Wait until authentication is checked
        return null; // or a loading indicator
    }

    console.log('go outlet');
    // If authenticated, render the Outlet
    return <Outlet />;
};

export { PrivateGuard };
