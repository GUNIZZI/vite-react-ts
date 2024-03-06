// import { useAuthState } from '@/app/providers/auth/index';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const User = () => {
    const { user, isLogined, userAction } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <h1>
                <strong>GUNI</strong>
                <span>Vite+React+TS</span>
                {isLogined ? (
                    <span>
                        {user.name}
                        <button onClick={() => userAction({ type: 'logout' })}>로그아웃</button>
                    </span>
                ) : (
                    <button onClick={() => navigate('login')}>관리자 모드</button>
                )}
            </h1>
        </>
    );
};

export { User };
