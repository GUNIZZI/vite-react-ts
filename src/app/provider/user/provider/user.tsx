import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { I_User, T_UserReducer } from '../model/user';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { fbApp } from '@/features/auth/firebase';

let initUser: I_User = {
    name: null,
    token: null,
};

const auth = getAuth(fbApp);
try {
    await (async () => {
        return new Promise((res, rej) => {
            auth.authStateReady().then(() => {
                if (auth.currentUser) {
                    initUser = {
                        name: auth.currentUser.email,
                        token: 'accessToken' in auth.currentUser ? String(auth.currentUser.accessToken) : null,
                    };
                    res(auth.currentUser);
                } else {
                    rej('error');
                }
            });
        });
    })();
} catch (e) {
    console.log(e);
}

const reducer = (user: I_User, userAction: T_UserReducer) => {
    let result: I_User = {
        ...user,
    };
    switch (userAction.type) {
        // 로그인
        case 'login':
            if (userAction.payload) {
                const name = 'name' in userAction.payload ? userAction.payload.name : null;
                const token = 'token' in userAction.payload ? userAction.payload.token : null;
                result = {
                    name: name,
                    token: token,
                } as I_User;
            }
            break;
        // 로그아웃
        case 'logout':
            signOut(auth)
                .then(() => {
                    console.log('reducer', userAction);
                    result = {
                        name: null,
                        token: null,
                    } as I_User;
                })
                .catch((err) => {
                    console.log('로그아웃 실패', err);
                });
            break;
    }
    return result;
};

const Context = createContext<{ user: I_User; userAction: Dispatch<T_UserReducer> }>({
    user: initUser,
    userAction: () => null,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [user, userAction] = useReducer(reducer, initUser);

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
            } else {
                userAction({
                    type: 'logout',
                });
            }
        });
    }, []);
    return <Context.Provider value={{ user, userAction }}>{children}</Context.Provider>;
};

export { Context, Provider };
