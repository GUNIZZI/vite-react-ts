import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthState = () => {
    const state = useContext(AuthContext);
    if (!state) throw new Error('Error-authContext');
    return state;
};
