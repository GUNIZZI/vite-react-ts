import { useReducer } from 'react';

import ThemeContext, { I_Theme } from './ThemeContext';

const themeReducer = (_state: I_Theme, action: I_Theme) => {
    return action;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const initTheme: I_Theme = {
        color: 'white',
        size: 'small',
    };
    const [theme, dispatch] = useReducer(themeReducer, initTheme);
    const setTheme = (newTheme: I_Theme) => {
        dispatch(newTheme);
    };
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
