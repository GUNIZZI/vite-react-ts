import { useAuth } from '@/features/auth/user/hooks';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

// import { useAuthState } from '@/app/providers/auth/index';

const PrivateGuard = () => {
    return <Outlet />;
    // const { isLogined } = useAuth();

    // useEffect(() => {
    //     if (!isLogined) alert('로그인이 필요한 서비스입니다.');
    // }, []);

    // return isLogined ? <Outlet /> : <Navigate to="/login" replace />;
};

export { PrivateGuard };
