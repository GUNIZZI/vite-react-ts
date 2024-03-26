import { useLocation, useNavigation, useOutlet } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider, ReactQueryDevtools } from './query/init';

import { LoaderClock } from '@/widget/loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useRef } from 'react';

// import type { ThemeConfig } from 'antd';
// import { ConfigProvider, theme } from 'antd';

// const { getDesignToken, useToken } = theme;

import './App.transition.scss';

// const config: ThemeConfig = {
//     token: {
//         colorPrimary: '#5acbe7',
//     },
// };
// const globalToken = getDesignToken(config);

const App = () => {
    const location = useLocation();
    const navigation = useNavigation();
    const currentOutlet = useOutlet();
    // const { token } = useToken();

    return (
        <>
            {/* <ConfigProvider theme={config}> */}
            <QueryClientProvider client={queryClient}>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <TransitionGroup id={Style.content}>
                    <CSSTransition key={location.pathname} timeout={1400} classNames="pageInOut">
                        <div>{currentOutlet}</div>
                    </CSSTransition>
                </TransitionGroup>

                <LoaderClock active={navigation.state === 'loading'} pageMode />
            </QueryClientProvider>
            {/* </ConfigProvider> */}
        </>
    );
};

export default App;

// https://reactcommunity.org/react-transition-group/with-react-router
