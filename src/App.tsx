import { AuthProvider } from './context/auth/AuthContext';
// import { ThemeProvider } from './context/theme2/ThemeContext';
import { Outlet } from 'react-router-dom';

import Style from '@/App.module.scss';

import Lnb from '@/layout/lnb/Index';

const App = () => {
    return (
        <>
            {/* <ThemeProvider> */}
            <AuthProvider>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content}>
                    <Outlet />
                </div>
            </AuthProvider>
            {/* </ThemeProvider> */}
        </>
    );
};

export default App;
