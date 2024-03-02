import { useThemeState } from '@/context/theme2/ThemeState';

import LayoutTop from './LayoutTop';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';

import Style from './Index.module.scss';
import { I_Theme } from '@/context/theme2/ThemeContext';

const getClassName = (theme: I_Theme) => {
    const result: string[] = [];
    if (theme.color === 'dark') result.push(Style.themeDark);
    if (theme.size === 'small') result.push(Style.themeSmall);
    return result.join(' ');
};

const Index = () => {
    const { theme } = useThemeState();

    return (
        <div id={Style.wrapper} className={getClassName(theme)}>
            <LayoutTop />
            <LayoutContent />
            <LayoutFooter />
        </div>
    );
};

export default Index;
