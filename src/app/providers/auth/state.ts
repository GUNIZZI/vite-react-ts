import { useContext } from 'react';
import { AuthContext } from './context';

export const useAuthState = () => {
    const state = useContext(AuthContext);
    if (!state) throw new Error('Error-authContext');
    return state;
};
