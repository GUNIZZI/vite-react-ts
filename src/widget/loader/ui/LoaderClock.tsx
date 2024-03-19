import Styles from './LoaderClock.module.scss';

const LoaderClock = () => {
    return (
        <div className={Styles.loader}>
            <span className={Styles.timer}></span>
        </div>
    );
};

export { LoaderClock };
