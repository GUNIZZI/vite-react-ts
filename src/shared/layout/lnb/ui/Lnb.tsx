import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { F_User } from '@/features/user';
import { W_ThemeControler } from '@/widget/themeChanger/index';
import Style from './Lnb.module.scss';
import { themeStore } from '@/app/store/theme';

const Lnb = () => {
    const { theme } = themeStore();

    return (
        <div className={`${Style.wrapper} ${theme === 'dark' && Style['is-darkMode']}`}>
            <h1>
                <NavLink to="/">
                    <strong>GUNI</strong>
                </NavLink>
                <span>일상/개발 Blog</span>
                <F_User className={Style.userInfo} />
            </h1>
            <nav>
                <ul>
                    <li>
                        <Tooltip placement="topLeft" title="일상 블로그" destroyTooltipOnHide={false} align={{ offset: [0, 0] }}>
                            <NavLink to="/story" style={{ '--navName': '"Story"' } as React.CSSProperties}>
                                <span>Story</span>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="topLeft" title="기술 블로그" align={{ offset: [0, 0] }}>
                            <NavLink to="/tech" style={{ '--navName': '"Tech"' } as React.CSSProperties}>
                                <span>Tech</span>
                            </NavLink>
                        </Tooltip>
                    </li>
                    <li>
                        <NavLink to="/works" style={{ '--navName': '"Works"' } as React.CSSProperties}>
                            <span>Works</span>
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/works/authrouter" style={{ '--navName': '"권한 라우팅"' } as React.CSSProperties}>
                                    <span>권한 라우팅</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/works/calcurator" style={{ '--navName': '"계산기"' } as React.CSSProperties}>
                                    <span>계산기</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <W_ThemeControler className={Style.themeControler} />
        </div>
    );
};

export { Lnb };
