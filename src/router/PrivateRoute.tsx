// PrivateRoute.tsx
import { useAuthState } from '@/context/auth/AuthState';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { isLogined } = useAuthState();

    // useEffect(() => {
    //     alert('로그인이 필요한 서비스입니다.');
    // }, []);

    return isLogined ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
