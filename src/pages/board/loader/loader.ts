import { auth } from '@/features/auth/user/hooks';
import { redirect } from 'react-router-dom';
import { sleep } from '@/shared/util';

export const loader = async () => {
    // await sleep(3000);
    return await auth
        .authStateReady()
        .then(async () => {
            // if (!auth.currentUser) {
            //     alert('로그인이 필요한 서비스입니다.');
            //     return redirect('/login');
            // }
            await sleep(3000);
            return null;
        })
        .catch((err) => {
            console.log('loader err', err);
            return null;
        });
};
