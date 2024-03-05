import { ChangeEvent, FormEvent, useState } from 'react';

import Style from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/service/auth/Index';
import { useAuthState } from '@/context/auth/AuthState';
import { redirect } from 'react-router-dom';

interface I_Inputs {
    id: string;
    pw: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export const loader = async () => {
    // await sleep(3000);
    return await auth
        .authStateReady()
        .then(() => {
            if (auth.currentUser) {
                console.log('auth 있음  >>  ', auth.currentUser);
                return redirect('/');
            } else return null;
        })
        .catch((err) => {
            return null;
        });
};

const Login = () => {
    const { userAction } = useAuthState();
    const [inputs, setInputs] = useState<I_Inputs>({ id: '', pw: '' });

    // 입력 이벤트
    const evtInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputs((userInfo) => ({
            ...userInfo,
            [e.target.name]: val,
        }));
    };

    // 서브밋
    const hndlOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, inputs.id, inputs.pw)
            .then((user) => {
                userAction({
                    type: 'login',
                    payload: {
                        name: user.user.email,
                        token: 'accessToken' in user.user ? user.user.accessToken : '',
                    },
                });
                history.back();
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-credential') alert('유효하지않은 계정 정보입니다.');
            });
    };

    return (
        <div className={Style.wrapper}>
            <h1>Login</h1>
            <form onSubmit={hndlOnSubmit}>
                <div className={Style.inputs}>
                    <span>
                        <input type="text" name="id" value={inputs.id} onChange={(e) => evtInputChange(e)} />
                        {!inputs.id ? <span>이메일을 입력하세요</span> : ''}
                    </span>
                    <span>
                        <input type="password" name="pw" value={inputs.pw} onChange={(e) => evtInputChange(e)} />
                        {!inputs.pw ? <span>비밀번호를 입력하세요</span> : ''}
                    </span>
                    <button type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
