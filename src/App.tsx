import { Outlet } from 'react-router-dom';

import Style from '@/App.module.scss';

import Lnb from '@/layout/lnb/Index';

const App = () => {
    return (
        <>
            <div id={Style.lnb}>
                <Lnb />
            </div>
            <div id={Style.content}>
                <Outlet />
            </div>
        </>
    );
};

export default App;
