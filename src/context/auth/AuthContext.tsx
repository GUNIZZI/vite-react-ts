import { Dispatch, createContext, useReducer } from 'react';

export interface I_User {
    name: string | null;
    token: string | null;
}
type ReducerType = {
    type: string;
    payload: string;
};

const initState: I_User = {
    name: null,
    token: null,
};

const authReducer = (user: I_User, _setUser: ReducerType) => {
    // switch (setTheme.type) {
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
    // }
    return user;
};

export const AuthContext = createContext<{ user: I_User; setUser: Dispatch<ReducerType> }>({
    user: initState,
    setUser: () => null,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useReducer(authReducer, initState);
    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
