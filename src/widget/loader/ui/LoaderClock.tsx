import { CSSTransition } from 'react-transition-group';

import Styles from './LoaderClock.module.scss';
import '@/app/App.transition.scss';

/**
 * active : 활성여부
 * pageMode : 페이지 모드의 로더일 경우
 */
type OwnProps = {
    active: boolean;
    pageMode?: boolean;
};

const LoaderClock = ({ active, pageMode }: OwnProps) => {
    return (
        <>
            <CSSTransition in={active} timeout={300} classNames="fade" unmountOnExit>
                <div className={[Styles.loader, pageMode && Styles['is-page']].join(' ')}>
                    <span className={Styles.timer}></span>
                </div>
            </CSSTransition>
        </>
    );
};

export { LoaderClock };
