import { UserState } from '../provider/user';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    const { user } = UserState();

    console.log('Auth Guard', user.name);

    if (!user.name) alert('로그인이 필요한 서비스입니다.');

    return user.name ? <Outlet /> : <Navigate to="/login" replace />;
};

export { AuthGuard };
