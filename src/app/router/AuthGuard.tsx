import { Navigate, Outlet } from 'react-router-dom';
import { userStore } from '../store/user';
import { useEffect } from 'react';

const AuthGuard = () => {
    useEffect(() => {
        if (!userStore.getState().getUser()) alert('로그인이 필요한 서비스입니다.');
    }, []);

    return userStore.getState().getUser() ? <Outlet /> : <Navigate to="/login" replace />;
};

export { AuthGuard };
