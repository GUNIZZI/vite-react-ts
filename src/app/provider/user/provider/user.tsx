import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { I_User, T_UserReducer } from '../model/user';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { fbApp } from '@/features/auth/firebase';

// 사용자 기본값
let initUser: I_User = {
    name: null,
    token: null,
};

// Firebase Init
const FbAuth = getAuth(fbApp);
// 사용자 정보가 있는지 확인
try {
    await (async () => {
        return new Promise((res, rej) => {
            FbAuth.authStateReady().then(() => {
                if (FbAuth.currentUser) {
                    initUser = {
                        name: FbAuth.currentUser.email,
                        token: 'accessToken' in FbAuth.currentUser ? String(FbAuth.currentUser.accessToken) : null,
                    };
                }
                res(FbAuth.currentUser);
            });
        });
    })();
} catch (e) {
    console.log('Firebase Get Auth Error!!', e);
}

/**
 * 사용자 인증 프로바이더
 * reducer - 리듀서
 * Context - 컨텍스트
 * Provider - 프로바이더
 */
const reducer = (user: I_User, userAction: T_UserReducer) => {
    console.log('userAction', userAction);
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
            signOut(FbAuth)
                .then(() => {
                    console.log('로그아웃 성공');
                })
                .catch((err) => {
                    console.log('로그아웃 실패', err);
                });
            console.log('userAction - 로그아웃 요청 후', user.name);
            return {
                name: null,
                token: null,
            } as I_User;
    }
    console.log('userAction end', userAction);
    return user;
};

const Context = createContext<{ user: I_User; userAction: Dispatch<T_UserReducer> }>({
    user: initUser,
    userAction: () => null,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [user, userAction] = useReducer(reducer, initUser);

    useEffect(() => {
        console.log('effect change -> ', user);
    }, [user]);

    // 로그인되어 있으면
    useEffect(() => {
        onAuthStateChanged(FbAuth, (userInfo) => {
            if (userInfo) {
                const payload: I_User = {
                    name: userInfo.email,
                    token: 'accessToken' in userInfo ? String(userInfo.accessToken) : null,
                };
                userAction({
                    type: 'login',
                    payload,
                });
            }
            // } else {
            //     userAction({
            //         type: 'logout',
            //     });
            // }
        });
    }, []);
    return <Context.Provider value={{ user, userAction }}>{children}</Context.Provider>;
};

export { FbAuth, Context, Provider };
