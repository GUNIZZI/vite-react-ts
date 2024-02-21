import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// Style Reset
import { Reset } from "styled-reset";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Reset />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
