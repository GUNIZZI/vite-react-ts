import { redirect } from 'react-router-dom';
import { auth } from '@/features/auth/user/hooks';

export const loader = async () => {
    // await sleep(3000);
    return await auth
        .authStateReady()
        .then(() => {
            if (auth.currentUser) {
                console.log('auth 있음  >>  ', auth.currentUser);
                return redirect('/');
            }
            return null;
        })
        .catch((err) => {
            console.log('err', err);
            return null;
        });
};
