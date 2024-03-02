import { createContext } from 'react';

export interface I_Theme {
    color: string;
    size: string;
}
export interface I_ThemeContext {
    theme: I_Theme;
    setTheme: (newTheme: I_Theme) => void;
}

const ThemeContext = createContext<I_ThemeContext | null>(null);
export default ThemeContext;
