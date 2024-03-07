import { useContext } from 'react';
import { Context } from '../provider/user';

const State = () => {
    const state = useContext(Context);
    if (!state) throw new Error('Error-authContext');
    return state;
};

export { State };
