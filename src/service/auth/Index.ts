import { useEffect, useState } from 'react';

import { fbApp } from '@/service/firebase';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';

/**
 * 로그인 정보
 */
const auth = getAuth(fbApp);
console.log(auth.currentUser?.displayName);
await onAuthStateChanged(auth, (user) => {
    console.log(auth.currentUser?.displayName);
    isLogined = true;
});

/**
 * 로그인 중인지 체크
 * @returns {Boolean}
 */
let isLogined: boolean = false;

/**
 * 구글 로그인(관리자)
 * @returns {Promise}
 */
const signInWithGoogle = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();

    try {
        const res = await signInWithPopup(auth, provider);
        return res; // 반환되는 값의 타입은 signInWithPopup의 반환값과 일치해야 합니다.
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error; // 예외를 다시 throw하여 호출하는 측에서 처리할 수 있도록 합니다.
    }
};

export { auth, isLogined, signInWithGoogle };
