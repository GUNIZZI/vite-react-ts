import { Dispatch, createContext, useReducer } from 'react';

export interface I_Theme {
    color: string;
    size: string;
}
type ReducerType = {
    type: string;
    payload: string;
};

const initState: I_Theme = {
    color: 'white',
    size: 'normal',
};

const themeReducer = (theme: I_Theme, setTheme: ReducerType) => {
    switch (setTheme.type) {
        case 'color':
            return {
                ...theme,
                color: setTheme.payload,
            };
        case 'size':
            return {
                ...theme,
                size: setTheme.payload,
            };
    }
    return theme;
};

export const ThemeContext = createContext<{ theme: I_Theme; setTheme: Dispatch<ReducerType> }>({
    theme: initState,
    setTheme: () => null,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useReducer(themeReducer, initState);
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
