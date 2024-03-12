import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    // const { user } = UserState();
    // const isLoggedIn = !!user.name;

    // console.log('Auth Guard', user.name, isLoggedIn);
    // useEffect(() => {
    //     if (!isLoggedIn) alert('로그인이 필요한 서비스입니다.');
    // }, [isLoggedIn]);

    return <Outlet />;
    // return user.name ? <Outlet /> : <Navigate to="/login" replace />;
};

export { AuthGuard };
