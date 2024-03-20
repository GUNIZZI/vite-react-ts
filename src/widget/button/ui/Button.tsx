import { ReactNode } from 'react';
import Styles from './Button.module.scss';

type OwnProps = {
    children: ReactNode;
    className?: string;
    style?: object;
    onClick: () => void;
};

const Button = ({ children, className, style, onClick }: OwnProps) => {
    /**
     * 버튼 내장 클래스 + 외부 클래스명
     */
    const classNames = (
        className
            ?.split(' ')
            .filter((name) => Styles[name])
            .map((name) => Styles[name]) || []
    )
        .concat(className?.split(' ').filter((name) => !!Styles[name] === false) || [])
        .join(' ');

    return (
        <>
            <button className={`${Styles.btn} ${classNames}`} style={style} onClick={onClick}>
                <span className={Styles.txt}>{children}</span>
            </button>
        </>
    );
};

export { Button };
