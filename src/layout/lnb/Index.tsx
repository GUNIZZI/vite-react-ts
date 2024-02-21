import { Link } from "react-router-dom";

import Style from "./Index.module.scss";

const Index = () => {
    return (
        <div className={Style.wrapper}>
            <h1>
                <strong>GUNI</strong>
                <span>Vite+React+TS</span>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/board">Board</Link>
                    </li>
                    <li>
                        <Link to="/works/calcurater">Works</Link>
                        <ul>
                            <li>
                                <Link to="/works/calcurater">계산기</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Index;
