import Style from './Board.module.scss';
import { auth, isLogined } from '@/features/auth/user/User';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

// function sleep(ms: number): Promise<void> {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

const Board = () => {
    const [logined] = useState(isLogined);

    return (
        <div id={Style.wrapper}>
            {logined ? 'A' : 'B'}
            컨텐츠
        </div>
    );
};

export { Board };
