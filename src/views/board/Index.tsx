import { useThemeState } from '@/context/theme2/ThemeState';

import LayoutTop from './LayoutTop';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';

import Style from './Index.module.scss';
import { I_Theme } from '@/context/theme2/ThemeContext';
import { isLogined, signInWithGoogle } from '@/service/auth/Index';
import { useState, useEffect } from 'react';

const getClassName = (theme: I_Theme) => {
    const result: string[] = [];
    if (theme.color === 'dark') result.push(Style.themeDark);
    if (theme.size === 'small') result.push(Style.themeSmall);
    return result.join(' ');
};

const Index = () => {
    const [logined, setLogined] = useState(isLogined);
    const { theme } = useThemeState();

    function handleGoogleLogin() {
        signInWithGoogle().then((res) => {
            console.log('성공', res);
        });
    }

    setTimeout(() => {
        console.log(isLogined);
    }, 1000);

    useEffect(() => {
        // console.log('Auth  >> ', auth);
    }, [logined]);

    return (
        <div id={Style.wrapper} className={getClassName(theme)}>
            {logined ? 'A' : 'B'}
            <button onClick={handleGoogleLogin}>로그인</button>

            <LayoutTop />
            <LayoutContent />
            <LayoutFooter />
        </div>
    );
};

export default Index;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // import { getAnalytics } from 'firebase/analytics';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FB_APIKEY,
//     authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_FB_PROJECTID,
//     storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
//     messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_FB_APPID,
//     measurementId: import.meta.env.VITE_FB_MEASUREMENTID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// /**
//  * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//  * 권한/로그인
//  */
// const auth = getAuth(app);
// const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
// };

// /**
//  * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//  * 스토어
//  */
// const db = getFirestore(app);

// // firestore export
// export { db, signInWithGoogle };
