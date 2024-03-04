import { Dispatch, createContext, useEffect, useReducer } from 'react';

import { auth } from '@/service/auth/Index';
import { onAuthStateChanged } from 'firebase/auth';

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

const authReducer = (user: I_User, setUser: ReducerType) => {
    switch (setUser.type) {
        // 자동 로그인
        case 'login':
            if (setUser.payload) {
                const name = 'name' in setUser.payload ? setUser.payload.name : 'displayName' in setUser.payload ? setUser.payload.displayName : null;
                const token = 'token' in setUser.payload ? setUser.payload.token : 'accessToken' in setUser.payload ? setUser.payload.accessToken : null;
                return {
                    name: name,
                    token: token,
                } as I_User;
            }
            break;
        // 구글 로그인
        case 'loginWithGoogle':
        // signInWithGoogle()
        //     .then((res) => {
        //         console.log('login on -> ', res);
        //     })
        //     .catch((err) => {
        //         console.log('error', err);
        //     });
    }
    return user;
};

export const AuthContext = createContext<{ user: I_User; setUser: Dispatch<ReducerType> }>({
    user: initState,
    setUser: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useReducer(authReducer, initState);

    // 로그인되어 있으면
    useEffect(() => {
        onAuthStateChanged(auth, (userInfo) => {
            if (userInfo) {
                setUser({
                    type: 'login',
                    payload: {
                        name: userInfo.displayName,
                        token: 'accessToken' in userInfo ? userInfo.accessToken : '',
                    },
                });
            }
        });
    }, []);
    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
