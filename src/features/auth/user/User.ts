// import { useEffect, useState } from 'react';

import { fbApp } from '@/features/auth/firebase';
import { getAuth } from 'firebase/auth';

/**
 * 로그인 정보
 */
const auth = getAuth(fbApp);
// console.log('auth  >>  ', auth.currentUser?.displayName);
// await onAuthStateChanged(auth, (user) => {
//     console.log('change');
//     isLogined = true;
// });

/**
 * 로그인 중인지 체크
 * @returns {Boolean}
 */
const isLogined: boolean = false;

/**
 * 구글 로그인(관리자)
 * @returns {Promise | I_User | null}
 */
// const signInWithGoogle = async (): Promise<UserCredential | I_User | null> => {
//     // const signInWithGoogle = async () => {

//     if (!auth.currentUser) {
//         try {
//             // const auth = getAuth(fbApp);
//             const provider = new GoogleAuthProvider();
//             return await signInWithPopup(auth, provider);
//         } catch (error) {
//             console.error('Error signing in with Google:', error);
//             throw error; // 예외를 다시 throw하여 호출하는 측에서 처리할 수 있도록 합니다.
//         }
//     } else {
//         return {
//             name: auth.currentUser.displayName,
//             token: 'accessToken' in auth.currentUser ? String(auth.currentUser.accessToken) : null,
//         };
//     }
// };

// signInWithEmailAndPassword(auth, id, pwd)
//     .then((user) => {
//         // Signed in
//         console.log(user); // user_name 바꿔주려고 콘솔창에 찍어봄
//         dispatch(setUser({ id: id, user_name: user.user.displayName, user_profile: '' }));
//         history.push('/'); // 로그인하면 바로 메인페이지 이동
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//     });

// export { auth, isLogined, signInWithGoogle };
export { auth, isLogined };
