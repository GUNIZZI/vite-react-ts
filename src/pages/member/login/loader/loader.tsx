import { userStore } from '@/app/store/user';
import { fbAuth } from '@/shared/auth/firebase';
import { redirect } from 'react-router-dom';

export const loader = async () => {
    if (userStore.getState().getUser()) return redirect('/');

    return await fbAuth
        .authStateReady()
        .then(() => {
            if (fbAuth.currentUser) {
                console.log('auth 있음  >>  ', fbAuth.currentUser);
                return redirect('/');
            }
            return null;
        })
        .catch((err) => {
            console.log('err', err);
            return null;
        });

    return null;

    // console.log('login loader  >>  ', UserAuth.currentUser);
    // if (UserAuth.currentUser) return redirect('/');
    // else return null;
};
