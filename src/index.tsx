import ReactDOM from 'react-dom/client';

import Routers from './app/router/Router.tsx';
import GlobalStyles from './app/styles/GlobalStyles.ts';
import '@/app/styles/index.scss';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routers />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
