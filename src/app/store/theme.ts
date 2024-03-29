// import { I_User } from '../provider/user/model/user';
import { create } from 'zustand';

interface I_ThemeAction {
    theme: string;
    setTheme: (thtme: string) => void;
}

const themeStore = create<I_ThemeAction>((set) => ({
    theme: 'light',
    setTheme: (theme) => {
        set({ theme: theme });
    },
}));

export { themeStore };
