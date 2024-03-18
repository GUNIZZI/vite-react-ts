import { Navigate, Outlet } from 'react-router-dom';
import { userStore } from '../store/user';
import { useEffect } from 'react';

const PrivateGuard = () => {
    useEffect(() => {
        if (!userStore.getState().getUser()) alert('관리자만 접근 가능한 페이지 입니다.');
    }, []);

    return userStore.getState().getUser() ? <Outlet /> : <Navigate to="/login" replace />;
};

export { PrivateGuard };
