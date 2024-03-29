import { useLocation, useNavigation, useOutlet } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider, ReactQueryDevtools } from './query/init';

import { LoaderClock } from '@/widget/loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.transition.scss';

// AntD Theme
import { ConfigProvider, theme as AntTheme } from 'antd';
import { AntdTheme } from '@/app/styles/AntdTheme';
import { themeStore } from './store/theme';
import { useEffect, useState } from 'react';

// algorithm: theme.darkAlgorithm,

const App = () => {
    const location = useLocation();
    const navigation = useNavigation();
    const currentOutlet = useOutlet();

    const { defaultAlgorithm, darkAlgorithm } = AntTheme;
    const { theme } = themeStore();
    const [useTheme, setUseTheme] = useState(AntdTheme);

    useEffect(() => {
        const curTheme = theme == 'light' ? defaultAlgorithm : darkAlgorithm;
        setUseTheme({ ...AntdTheme, algorithm: curTheme });
    }, [theme]);

    return (
        <>
            <ConfigProvider theme={useTheme}>
                <QueryClientProvider client={queryClient}>
                    <div id={Style.lnb}>
                        <Lnb />
                    </div>
                    <TransitionGroup id={Style.content}>
                        <CSSTransition key={location.pathname} timeout={1400} classNames="pageInOut">
                            <div className={Style.wrapper}>{currentOutlet}</div>
                        </CSSTransition>
                    </TransitionGroup>

                    <LoaderClock active={navigation.state === 'loading'} pageMode />
                </QueryClientProvider>
            </ConfigProvider>
        </>
    );
};

export default App;

// https://reactcommunity.org/react-transition-group/with-react-router
