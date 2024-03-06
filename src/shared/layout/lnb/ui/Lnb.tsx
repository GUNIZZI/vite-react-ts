import { NavLink, useNavigate } from 'react-router-dom';

import Style from './Lnb.module.scss';
import { useAuth } from '@/features/auth/user/hooks';
// import { useAuthState } from '@/app/providers/auth/index';

const Lnb = () => {
    const navigate = useNavigate();
    const { user, userAction, isLogined } = useAuth();

    return (
        <div className={Style.wrapper}>
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
            <nav>
                <ul>
                    <li>
                        <NavLink to="/story" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/board" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            Board
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/works" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            Works
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/works/authRouter" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                                    권한 라우팅
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Lnb };
