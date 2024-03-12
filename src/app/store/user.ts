// import { I_User } from '../provider/user/model/user';
import { create } from 'zustand';
import { I_User } from './user.model';

interface I_UserAction {
    setUser: ({ name, token }: I_User) => void;
    getUser: () => boolean;
}

const userStore = create<I_User & I_UserAction>((set) => ({
    name: '10',
    token: '10',
    setUser: ({ name, token }: I_User) => {
        // console.log(name, token);
        set((state) => ({ name: name, token: token }));
    },
    getUser: () => {
        console.log(set);
        return true;
    },
}));

export { userStore };
