import { fbAuth } from '@/shared/auth/firebase';
import { sleep } from '@/shared/util';

export const loader = async () => {
    // await sleep(3000);
    return await fbAuth
        .authStateReady()
        .then(async () => {
            await sleep(3000);
            return null;
        })
        .catch((err) => {
            console.log('loader err', err);
            return null;
        });
};
