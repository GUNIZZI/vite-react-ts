import { ReactNode } from 'react';
import { Location } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './RouterTransition.scss';

type RouteTransitionProps = {
    location: Location;
    children: ReactNode;
};

const RouteTransition = ({ location, children }: RouteTransitionProps) => {
    const pathname = location.pathname;

    console.log('asdasdasd');

    return (
        <TransitionGroup className={'transition-wrapper'}>
            <CSSTransition key={pathname} timeout={5000} classNames={'navigate-push'}>
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RouteTransition;
