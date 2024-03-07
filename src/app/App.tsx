import { Outlet, useNavigation } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';
import { UserProvider } from '@/app/provider/user/';

const App = () => {
    const navigation = useNavigation();

    return (
        <>
            <UserProvider>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content} className={navigation.state === 'loading' ? Style['is-loading'] : ''}>
                    <Outlet />
                </div>
            </UserProvider>
        </>
    );
};

export default App;
