import { Outlet, useNavigation } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider, ReactQueryDevtools } from './query/init';
// import '@/features/auth/firebase/Auth';

const App = () => {
    const navigation = useNavigation();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <UserProvider> */}
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content} className={navigation.state === 'loading' ? Style['is-loading'] : ''}>
                    <Outlet />
                </div>
                {/* </UserProvider> */}
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
};

export default App;
