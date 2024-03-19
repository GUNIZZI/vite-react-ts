import { fbAuth } from '@/shared/auth/firebase';

export const AppLoader = async () => {
    // Firebase 로그인 정보 확인
    await fbAuth.authStateReady();

    return null;
};
