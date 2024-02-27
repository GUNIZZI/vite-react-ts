import { NavLink } from 'react-router-dom';

import Style from './Index.module.scss';

const Index = () => {
    return (
        <div className={Style.wrapper}>
            <h1>
                <strong>GUNI</strong>
                <span>Vite+React+TS</span>
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

export default Index;
