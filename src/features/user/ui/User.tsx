import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';
import { fbAuth } from '@/shared/auth/firebase';
import { DS_Button } from '@/widget/button';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const { name, setUser } = userStore();

    useEffect(() => {
        onAuthStateChanged(fbAuth, (userInfo) => {
            if (userInfo) {
                const payload: I_User = {
                    name: userInfo.email,
                    token: 'accessToken' in userInfo ? String(userInfo.accessToken) : null,
                };
                setUser(payload);
            } else {
                setUser({ name: null, token: null });
            }
        });
    }, []);

    return (
        <>
            {name ? (
                // Login 중
                <span>
                    {name}
                    {/* <button onClick={() => signOut(fbAuth)}>로그아웃</button> */}
                </span>
            ) : (
                // Login 중 아님
                // <button onClick={() => navigate('login')}>로그인</button>
                <>
                    <DS_Button className={`is-round is-circle`} onClick={() => navigate('login')}>
                        <span className="material-icons">logout</span>
                    </DS_Button>
                </>
            )}
        </>
    );
};
export { User };
