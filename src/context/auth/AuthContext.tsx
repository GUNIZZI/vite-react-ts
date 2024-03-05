import { Dispatch, createContext, useEffect, useMemo, useReducer, useState } from 'react';

import { auth } from '@/service/auth/Index';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export interface I_User {
    name: string | null;
    token: string | null;
}
type ReducerType = {
    type: string;
    payload?: object;
};

const initState: I_User = {
    name: null,
    token: null,
};

const authReducer = (user: I_User, userAction: ReducerType) => {
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
                .catch((err) => {});
    }
    return user;
};

export const AuthContext = createContext<{ user: I_User; userAction: Dispatch<ReducerType>; isLogined: boolean }>({
    user: initState,
    userAction: () => null,
    isLogined: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, userAction] = useReducer(authReducer, initState);
    const [isLogined, setIsLogined] = useState(false);

    // 로그인되어 있으면
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
    return <AuthContext.Provider value={{ user, userAction, isLogined }}>{children}</AuthContext.Provider>;
};
