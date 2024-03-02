import { ThemeProvider } from './context/theme2/ThemeContext';
import { Outlet } from 'react-router-dom';

import Style from '@/App.module.scss';

import Lnb from '@/layout/lnb/Index';

const App = () => {
    return (
        <>
            <ThemeProvider>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content}>
                    <Outlet />
                </div>
            </ThemeProvider>
        </>
    );
};

export default App;
