import React, { ChangeEvent, useState } from "react";

import Input from "./component/Input";

import Style from "./Index.module.scss";

const Index: React.FC = () => {
    const [calc, setCalc] = useState("0");

    const evtChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCalc(e.target.value);
    };

    return (
        <div className={Style.wrapper}>
            <Input value={calc} changeCallback={evtChange} />

            <div className={Style.row}>
                <button className="btnDims">(</button>
                <button className="btnDims">)</button>
                <button className="btnDims">%</button>
                <button className="btnDims">C</button>
            </div>
            <div className={Style.row}>
                <div className={Style.numbers}>
                    <div>
                        <button className="btn">7</button>
                        <button className="btn">8</button>
                        <button className="btn">9</button>
                    </div>
                    <div>
                        <button className="btn">4</button>
                        <button className="btn">5</button>
                        <button className="btn">6</button>
                    </div>
                    <div>
                        <button className="btn">1</button>
                        <button className="btn">2</button>
                        <button className="btn">3</button>
                    </div>
                    <div>
                        <button className="btn">0</button>
                        <button className="btn">.</button>
                        <button className="btn">=</button>
                    </div>
                </div>
                <div className={Style.row}>
                    <button className="btnDims">/</button>
                    <button className="btnDims">*</button>
                    <button className="btnDims">-</button>
                    <button className="btnDims">+</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
