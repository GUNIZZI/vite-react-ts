import { AuthProvider } from './context/auth/AuthContext';
import { Outlet, useNavigation } from 'react-router-dom';

import Style from '@/App.module.scss';

import Lnb from '@/layout/lnb/Index';

const App = () => {
    const navigation = useNavigation();

    return (
        <>
            <AuthProvider>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content} className={navigation.state === 'loading' ? Style['is-loading'] : ''}>
                    <Outlet />
                </div>
            </AuthProvider>
        </>
    );
};

export default App;
