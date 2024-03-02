import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export const useThemeState = () => {
    const state = useContext(ThemeContext);
    if (!state) throw new Error('Error-userContext');
    return state;
};
