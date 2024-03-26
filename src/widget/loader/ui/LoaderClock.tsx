import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Styles from './LoaderClock.module.scss';
import '@/app/App.transition.scss';

type OwnProps = {
    pageMode?: boolean;
};

const LoaderClock = ({ pageMode }: OwnProps) => {
    const nodeRef = useRef(null);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);
    }, []);

    const tmp = () => {
        console.log('asdasd');
    };

    return (
        <>
            <CSSTransition in={showLoader} nodeRef={nodeRef} timeout={300} classNames="fade" unmountOnExit>
                <div ref={nodeRef} className={[Styles.loader, pageMode && Styles['is-page']].join(' ')}>
                    <span className={Styles.timer}></span>
                </div>
            </CSSTransition>
        </>
    );
};

export { LoaderClock };
