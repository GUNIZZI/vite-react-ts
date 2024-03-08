import { UserAuth, UserState } from '@/app/provider/user';
import { redirect } from 'react-router-dom';

export const loader = async () => {
    // await sleep(3000);
    // return await UserAuth.authStateReady()
    //     .then(() => {
    //         if (UserAuth.currentUser) {
    //             console.log('auth 있음  >>  ', UserAuth.currentUser);
    //             return redirect('/');
    //         }
    //         return null;
    //     })
    //     .catch((err) => {
    //         console.log('err', err);
    //         return null;
    //     });

    console.log('login loader  >>  ', UserAuth.currentUser);
    if (UserAuth.currentUser) return redirect('/');
    else return null;
};
