import { fbApp } from '@/features/auth/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useReducer, useState } from 'react';
import { I_User, T_UserReducer } from './model/user';

import { sleep } from '@/shared/util';

let initUser: I_User = {
    name: null,
    token: null,
};
let initLogined: boolean = false;

const auth = getAuth(fbApp);
try {
    await (async () => {
        return new Promise((res, rej) => {
            onAuthStateChanged(auth, (userInfo) => {
                if (userInfo) {
                    initUser = {
                        name: userInfo.email,
                        token: 'accessToken' in userInfo ? String(userInfo.accessToken) : null,
                    };
                    initLogined = userInfo.uid ? true : false;
                    res(userInfo);
                } else {
                    rej('error');
                }
            });
        });
    })();
} catch (e) {
    console.log(e);
}

const userReducer = (user: I_User, userAction: T_UserReducer) => {
    switch (userAction.type) {
        // 로그인
        case 'login':
            if (userAction.payload) {
                const name = 'name' in userAction.payload ? userAction.payload.name : null;
                const token = 'token' in userAction.payload ? userAction.payload.token : null;
                return {
                    name: name,
                    token: token,
                } as I_User;
            }
            break;
        // 로그아웃
        case 'logout':
            signOut(auth)
                .then(() => {
                    return {
                        name: null,
                        token: null,
                    } as I_User;
                })
                .catch((err) => {
                    console.log('로그아웃 실패', err);
                });
    }
    return user;
};

const useAuth = () => {
    const [user, userAction] = useReducer(userReducer, initUser);
    const [isLogined, setIsLogined] = useState(initLogined);

    useEffect(() => {
        onAuthStateChanged(auth, (userInfo) => {
            if (userInfo) {
                const payload: I_User = {
                    name: userInfo.email,
                    token: 'accessToken' in userInfo ? String(userInfo.accessToken) : null,
                };
                userAction({
                    type: 'login',
                    payload,
                });
                setIsLogined(true);
            } else {
                userAction({
                    type: 'logout',
                });
                setIsLogined(false);
            }
        });
    }, []);

    return { user, isLogined, userAction };
};
export { auth, useAuth };
