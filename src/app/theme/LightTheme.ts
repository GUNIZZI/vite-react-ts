import { theme } from 'antd';
import { DefaultTheme } from './DefaultTheme';

const Theme = {
    algorithm: theme.defaultAlgorithm,
    components: {
        Layout: {
            bodyBg: '#f1f1f1',
            siderBg: '#ffffff',
        },
    },
};

const LightTheme = { ...DefaultTheme, ...Theme };

export { LightTheme };
