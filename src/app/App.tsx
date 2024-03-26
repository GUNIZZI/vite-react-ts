import { useLocation, useNavigation, useOutlet } from 'react-router-dom';

import Style from './App.module.scss';

import { Lnb } from '@/shared/layout/lnb/Index';

import { queryClient, QueryClientProvider, ReactQueryDevtools } from './query/init';

import { LoaderClock } from '@/widget/loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.transition.scss';
import { useRef } from 'react';

const App = () => {
    const location = useLocation();
    const location = useLocation();
    const navigation = useNavigation();
    const nodeRef = useRef(null);
    const currentOutlet = useOutlet();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div id={Style.lnb}>
                    <Lnb />
                </div>
                <TransitionGroup id={Style.content}>
                    <CSSTransition key={location.pathname} timeout={1400} classNames="pageInOut">
                        <div ref={nodeRef}>{currentOutlet}</div>
                    </CSSTransition>
                </TransitionGroup>

                {navigation.state === 'loading' && <LoaderClock pageMode />}
            </QueryClientProvider>
        </>
    );
};

export default App;

// https://reactcommunity.org/react-transition-group/with-react-router
