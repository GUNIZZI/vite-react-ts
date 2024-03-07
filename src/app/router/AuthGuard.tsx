import { useAuth } from '@/features/auth/user/hooks';
// import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    const { isLogined } = useAuth();

    if (!isLogined) alert('로그인이 필요한 서비스입니다.');

    return isLogined ? <Outlet /> : <Navigate to="/login" replace />;
};

export { AuthGuard };
