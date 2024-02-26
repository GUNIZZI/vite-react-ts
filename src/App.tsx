import { Route, Routes } from "react-router-dom";

import Style from "./App.module.scss";

import Lnb from "./layout/lnb/Index";
import Home from "./views/home/Index";
import Board from "./views/board/Index";

const App = () => {
    return (
        <>
            <div id={Style.lnb}>
                <Lnb />
            </div>
            <div id={Style.content}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
            </div>
        </>
    );
};

export default App;