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
                <span>일상/개발 Blog</span>
                <F_User />
            </h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/story" style={{ '--navName': '"Story"' } as React.CSSProperties}>
                            <span>Story</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/board" style={{ '--navName': '"Board"' } as React.CSSProperties}>
                            <span>Board</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/works" style={{ '--navName': '"Works"' } as React.CSSProperties}>
                            <span>Works</span>
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/works/authrouter" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                                    <span style={{ '--navName': '"권한 라우팅"' } as React.CSSProperties}>권한 라우팅</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/works/calcurator" className={({ isActive }) => (isActive ? Style.activeItem : '')}>
                                    <span style={{ '--navName': '"계산기"' } as React.CSSProperties}>계산기</span>
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
