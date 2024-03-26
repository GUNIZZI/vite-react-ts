import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';
import { fbAuth } from '@/shared/auth/firebase';
import { DS_Button } from '@/widget/button';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './User.module.scss';

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
        <div className={Styles.userInfo}>
            {name ? (
                // Login 중
                <>
                    <span>{name}</span>
                    <DS_Button variant="icon circle" size="sm" onClick={() => signOut(fbAuth)}>
                        <span className="material-icons">logout</span>
                    </DS_Button>
                </>
            ) : (
                // Login 중 아님
                <>
                    <DS_Button variant="circle" size="sm" onClick={() => navigate('login')}>
                        <span className="txt">Sign in</span>
                        <span className="material-icons">login</span>
                    </DS_Button>
                </>
            )}
        </div>
    );
};
export { User };
