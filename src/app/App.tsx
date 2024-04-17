import { useLocation, useNavigation, useOutlet } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider } from './query/init';

// 로더
import { LoaderClock } from '@/widget/loader';

// 트랜지션
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.transition.scss';

// AntD Theme
import { ConfigProvider, Layout } from 'antd';
import { LightTheme } from '@/app/theme/LightTheme';
import { DarkTheme } from '@/app/theme/DarkTheme';
import { themeStore } from './store/theme';
import { useEffect, useRef, useState } from 'react';

// 테마별 스타일 적용을 원할하게 하기 위해 Layout 사용
const { Sider, Content } = Layout;

// 테마 자동 바뀌기 위한 타임체크(18시 이후에 다크테마 적용)
const curTime = new Date().getHours();

// algorithm: theme.darkAlgorithm,

const App = () => {
    const location = useLocation();
    const navigation = useNavigation();
    const currentOutlet = useOutlet();

    // const { defaultAlgorithm, darkAlgorithm } = AntTheme;
    const { theme } = themeStore();
    const [useTheme, setUseTheme] = useState(curTime > 18 ? DarkTheme : LightTheme);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setUseTheme(theme == 'light' ? DarkTheme : LightTheme);
        } else {
            isMounted.current = true;
        }
    }, [theme]);

    return (
        <>
            <ConfigProvider theme={useTheme}>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <Sider id={Style.lnb}>
                            <Lnb />
                        </Sider>
                        {/* 페이징 트랜지션 */}
                        <TransitionGroup id={Style.content}>
                            <CSSTransition key={location.pathname} timeout={1400} classNames="pageInOut">
                                <Content className={Style.wrapper}>{currentOutlet}</Content>
                            </CSSTransition>
                        </TransitionGroup>
                        <LoaderClock active={navigation.state === 'loading'} pageMode />
                    </Layout>
                </QueryClientProvider>
            </ConfigProvider>
        </>
    );
};

export default App;

// https://reactcommunity.org/react-transition-group/with-react-router
