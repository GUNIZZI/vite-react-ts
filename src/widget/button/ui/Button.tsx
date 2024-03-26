import { ReactNode } from 'react';
import Styles from './Button.module.scss';

type OwnProps = {
    children: ReactNode;
    className?: string;
    style?: object;
    onClick?: () => void;

    variant?: string;
    color?: string;
    size?: string;
    state?: string;
};

const Button = ({ children, className, variant, size, style, onClick }: OwnProps) => {
    /**
     * className / variant / size / state / style
     * 위 항목 모듈 클래스로 변환
     */
    const classNames = (
        className
            ?.split(' ')
            .filter((name) => Styles[name])
            .map((name) => Styles[name]) || []
    )
        .concat(className?.split(' ').filter((name) => !!Styles[name] === false) || [])
        // variant
        .concat((variant?.split(' ').filter((name) => !!Styles[name] === false) || []).map((name) => Styles[`is-variant-${name}`]))
        // size
        .concat((size?.split(' ').filter((name) => !!Styles[name] === false) || []).map((name) => Styles[`is-size-${name}`]))
        .join(' ');

    return (
        <>
            <button className={`${Styles.btn} ${classNames}`} style={style} onClick={onClick}>
                {/* {variant?.indexOf('icon') === -1 ? <span className={Styles.txt}>{children}</span> : <>{children}</>} */}
                {children}
            </button>
        </>
    );
};

export { Button };
