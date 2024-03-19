import { Outlet, useNavigation } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider, ReactQueryDevtools } from './query/init';

import { LoaderClock } from '@/widget/loader';

const App = () => {
    const navigation = useNavigation();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <UserProvider> */}
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <div id={Style.content}>
                    <Outlet />
                    {navigation.state === 'loading' ? <LoaderClock /> : ''}
                </div>
                {/* </UserProvider> */}
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
};

export default App;
