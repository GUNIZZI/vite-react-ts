import { ChangeEvent, FormEvent, useState } from 'react';

import Style from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { I_Inputs } from '../model/login';
import { fbAuth } from '@/shared/auth/firebase';
import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';

const Login = () => {
    const { setUser } = userStore();
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
        signInWithEmailAndPassword(fbAuth, inputs.id, inputs.pw)
            .then((user) => {
                setUser({
                    name: user.user.email,
                    token: 'accessToken' in user.user ? user.user.accessToken : '',
                } as I_User);
                alert('로그인 되었습니다.');
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

export { Login };
