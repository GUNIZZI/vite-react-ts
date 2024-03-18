import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';
import { fbAuth } from '@/shared/auth/firebase';
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
                <span>
                    {name}
                    <button onClick={() => signOut(fbAuth)}>로그아웃</button>
                </span>
            ) : (
                <button onClick={() => navigate('login')}>로그인</button>
            )}
        </>
    );
};
export { User };
