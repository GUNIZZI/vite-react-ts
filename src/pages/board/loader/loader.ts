import { auth } from '@/features/auth/user/User';
import { redirect } from 'react-router-dom';

export const loader = async () => {
    // await sleep(3000);
    return await auth
        .authStateReady()
        .then(() => {
            if (!auth.currentUser) {
                console.log('auth 없음  >>  ', auth.currentUser);
                return redirect('/login');
            } else return null;
        })
        .catch((err) => {
            console.log('loader err', err);
            return null;
        });
};
