import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./components/styles/GlobalStyles.ts";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
