import { NavLink } from 'react-router-dom';
import { F_User } from '@/features/user';
import Style from './Lnb.module.scss';

const Lnb = () => {
    // const navName = [{ '--text': 'Story' }, { '--text': 'Board' }];

    return (
        <div className={Style.wrapper}>
            <h1>
                <NavLink to="/">
                    <strong>GUNI</strong>
                </NavLink>
                <span>Vite+React+TS</span>
                <F_User />
            </h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/story" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            <span style={{ '--navName': '"Story"' } as React.CSSProperties}>Story</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/board" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            <span style={{ '--navName': '"Board"' } as React.CSSProperties}>Board</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/works" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                            <span style={{ '--navName': '"Works"' } as React.CSSProperties}>Works</span>
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/works/authRouter" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                                    <span style={{ '--navName': '"권한 라우팅"' } as React.CSSProperties}>권한 라우팅</span>
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
