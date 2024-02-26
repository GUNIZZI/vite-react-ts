import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './components/styles/GlobalStyles.ts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <Router basename="/vite-react-ts">
            <App />
        </Router>
    </React.StrictMode>,
);
