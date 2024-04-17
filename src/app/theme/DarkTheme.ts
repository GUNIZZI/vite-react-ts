import { theme } from 'antd';
import { DefaultTheme } from './DefaultTheme';

const Theme = {
    algorithm: theme.darkAlgorithm,
    components: {
        Layout: {
            bodyBg: '#252525',
            siderBg: '#1c1c1c',
        },
    },
};

const DarkTheme = { ...DefaultTheme, ...Theme };

export { DarkTheme };
