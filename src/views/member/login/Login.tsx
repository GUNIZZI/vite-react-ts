import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import Style from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/service/auth/Index';

interface I_Inputs {
    id: string;
    pw: string;
}

const Login = () => {
    const [inputs, setInputs] = useState<I_Inputs>({ id: '', pw: '' });
    const [errors, setErrors] = useState<I_Inputs>({ id: '', pw: '' });

    const evtInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputs((userInfo) => ({
            ...userInfo,
            [e.target.name]: val,
        }));
    };

    const validate = () => {
        const errorMsg = {
            id: '',
            pw: '',
        };
        if (!inputs.id.trim()) errorMsg.id = '이메일을 입력하세요';
        if (!inputs.pw.trim()) errorMsg.pw = '비밀번호를 입력하세요';

        return errorMsg;
    };
    useEffect(() => {
        setErrors(validate());
    }, [inputs]);

    const hndlOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        // alert(JSON.stringify(values, null, 2));

        signInWithEmailAndPassword(auth, inputs.id, inputs.pw)
            .then((user) => {
                console.log('login -------------', user);
                //         // Signed in
                //         // console.log(user); // user_name 바꿔주려고 콘솔창에 찍어봄
                //         // dispatch(setUser({ id: id, user_name: user.user.displayName, user_profile: '' }));
                //         // history.push('/'); // 로그인하면 바로 메인페이지 이동
                //         // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
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
