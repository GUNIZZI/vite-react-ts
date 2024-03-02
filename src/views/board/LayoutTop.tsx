import { useThemeState } from '@/context/theme2/ThemeState';

const LayoutTop = () => {
    const { theme, setTheme } = useThemeState();

    const clickChangeTehme = () => {
        setTheme({ type: 'color', payload: theme.color === 'white' ? 'dark' : 'white' });
    };
    const clickChangeSize = () => {
        setTheme({ type: 'size', payload: theme.size === 'normal' ? 'small' : 'normal' });
    };

    return (
        <div className="header">
            <div>Header</div>
            <div>{theme.color}</div>
            <button onClick={clickChangeTehme}>Change Theme</button>
            <button onClick={clickChangeSize}>Change Size</button>
        </div>
    );
};

export default LayoutTop;
