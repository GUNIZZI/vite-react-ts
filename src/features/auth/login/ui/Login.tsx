import { ChangeEvent, FormEvent, useState } from 'react';

import Style from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { I_Inputs } from '../model/login';
import { fbAuth } from '@/shared/auth/firebase';
import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';
import { Form, Input, type FormProps, Button } from 'antd';

// const validateMessages = {
//     required: '필수값 입니다.',
//     types: {
//         email: '이메일 형식이 아닙니다.',
//     },
//     // ...
// };

const onFinish: FormProps<I_Inputs>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<I_Inputs>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    const { setUser } = userStore();
    // const [inputs, setInputs] = useState<I_Inputs>({ id: '', pw: '' });

    // 입력 이벤트
    // const evtInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const val = e.target.value;
    //     setInputs((userInfo) => ({
    //         ...userInfo,
    //         [e.target.name]: val,
    //     }));
    // };

    // 서브밋
    const onFinish: FormProps<I_Inputs>['onFinish'] = (values) => {
        console.log('Success:', values);
        signInWithEmailAndPassword(fbAuth, values.id, values.pw)
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
    const onFinishFailed: FormProps<I_Inputs>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={Style.wrapper}>
            <h1>
                <span className="material-symbols-outlined">id_card</span>
            </h1>
            {/* <form onSubmit={hndlOnSubmit}> */}
            {/* <Form onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}> */}
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <div className={Style.inputs}>
                    <span>
                        <Form.Item
                            name="id"
                            rules={[
                                { required: true, type: 'email' },
                                { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '이메일 형식이 아닙니다.' },
                            ]}
                            validateTrigger="onBlur">
                            <Input size="large" placeholder="Email" />
                        </Form.Item>
                        {/* <Input status="error" placeholder="Error" value={inputs.id} /> */}
                        {/* <input type="text" name="id" value={inputs.id} onChange={(e) => evtInputChange(e)} /> */}
                        {/* {!inputs.id ? <span>이메일을 입력하세요</span> : ''} */}
                    </span>
                    <span>
                        <Form.Item<I_Inputs> name="pw" rules={[{ required: true, min: 4 }]} validateTrigger="onBlur">
                            <Input.Password size="large" placeholder="password" />
                        </Form.Item>
                        {/* <input type="password" name="pw" value={inputs.pw} onChange={(e) => evtInputChange(e)} /> */}
                        {/* {!inputs.pw ? <span>비밀번호를 입력하세요</span> : ''} */}
                    </span>
                    <div className={Style.btns}>
                        <Button type="primary" size="large" htmlType="submit">
                            Sign in
                        </Button>
                        <Button size="large" htmlType="submit">
                            Guest in
                        </Button>
                    </div>
                    {/* <button type="submit">LOGIN</button> */}
                </div>
            </Form>
            {/* </form> */}
        </div>
    );
};

export { Login };
