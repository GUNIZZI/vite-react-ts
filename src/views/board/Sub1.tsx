import { useContext } from 'react';
import { testContext } from './Index';

const Sub1 = () => {
    const val = useContext(testContext);

    const evtClick = () => {
        val.a += 10;
        console.log(val);
    };

    return (
        <div>
            Board
            <div>a: {val.a}</div>
            <div>b: {val.b}</div>
            <button onClick={evtClick}>b값 바꾸기</button>
        </div>
    );
};

export default Sub1;
