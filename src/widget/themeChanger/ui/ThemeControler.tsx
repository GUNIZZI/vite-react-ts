import { themeStore } from '@/app/store/theme';
import { Tooltip } from 'antd';
import Styles from './ThemeControler.module.scss';

type OwnProps = {
    className: string;
};

const ThemeControler = ({ className }: OwnProps) => {
    const { theme, setTheme } = themeStore();

    return (
        <>
            <Tooltip placement="right" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'} destroyTooltipOnHide={false} align={{ offset: [0, 0] }}>
                <button className={`${className} ${Styles.btn} ${theme === 'dark' && Styles['is-darkMode']}`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <span className={[Styles.lightMode, 'material-symbols-outlined'].join(' ')}>light_mode</span>
                    <span className={[Styles.darkMode, 'material-symbols-outlined'].join(' ')}>dark_mode</span>
                </button>
            </Tooltip>
        </>
    );
};

export { ThemeControler };
