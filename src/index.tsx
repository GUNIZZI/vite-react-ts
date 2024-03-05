import ReactDOM from 'react-dom/client';

import Routers from './router/Router.tsx';
import GlobalStyles from './components/styles/GlobalStyles.ts';
import './index.scss';

const App = () => {
    return (
        <>
            {/* <React.StrictMode> */}
            <GlobalStyles />
            <Routers />
            {/* </React.StrictMode> */}
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
