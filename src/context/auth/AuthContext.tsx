import { Dispatch, createContext, useReducer } from 'react';

import { signInWithGoogle } from '@/service/auth/Index';
import { UserCredential } from 'firebase/auth';

export interface I_User {
    name: string | null;
    token: string | null;
}
type ReducerType = {
    type: string;
    payload?: string;
};

const initState: I_User = {
    name: null,
    token: null,
};

const authReducer = (user: I_User, setUser: ReducerType) => {
    switch (setUser.type) {
        //     case 'color':
        //         return {
        //             ...theme,
        //             color: setTheme.payload,
        //         };
        //     case 'size':
        //         return {
        //             ...theme,
        //             size: setTheme.payload,
        //         };
        case 'loginWithGoogle':
            signInWithGoogle();
        // return {
        //     ...theme,
        //     size: setTheme.payload,
        // };
    }
    return user;
};

export const AuthContext = createContext<{ user: I_User; setUser: Dispatch<ReducerType> }>({
    user: initState,
    setUser: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useReducer(authReducer, initState);
    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
