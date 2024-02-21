import React, { ChangeEvent } from "react";

import Style from "./Input.module.scss";

interface OwnProps {
    value: string;
    changeCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<OwnProps> = ({ value, changeCallback }: OwnProps) => {
    // const evtChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value);
    // };

    return (
        <>
            <input type="text" className={Style.input} value={value} onChange={changeCallback} />
        </>
    );
};

export default Input;
