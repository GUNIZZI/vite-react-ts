import Style from './Login.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { I_Inputs } from '../model/login';
import { fbAuth } from '@/shared/auth/firebase';
import { userStore } from '@/app/store/user';
import { I_User } from '@/app/store/user.model';

import { Form, Input, type FormProps, Button, Switch, Tooltip, Space, Flex, notification } from 'antd';
import { LoginOutlined, UserOutlined, KeyOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

type T_NotyProps = {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string | null;
    description: string;
};

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = userStore();
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    // AntD Noty
    const openNoty = ({ type, message, description }: T_NotyProps) => {
        api[type]({
            message: message,
            description: description,
            duration: 5,
        });
    };

    // Guest 계정 삽입
    const setGuest = (val: boolean) => {
        if (val) {
            const email = import.meta.env.VITE_FB_GUEST_EMAIL;
            const pw = import.meta.env.VITE_FB_GUEST_PW;
            form.setFieldValue('id', email);
            form.setFieldValue('pw', pw);
        } else {
            form.setFieldValue('id', '');
            form.setFieldValue('pw', '');
        }
    };

    // 서브밋
    const onFinish: FormProps<I_Inputs>['onFinish'] = (values) => {
        setIsLoading(true);
        signInWithEmailAndPassword(fbAuth, values.id, values.pw)
            .then((user) => {
                setUser({
                    name: user.user.email,
                    token: 'accessToken' in user.user ? user.user.accessToken : '',
                } as I_User);
                // alert('로그인 되었습니다.');
                openNoty({ type: 'success', message: null, description: '로그인 되었습니다.' });
                history.back();
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-credential') openNoty({ type: 'error', message: '로그인 실패', description: '유효하지 않은 계정정보 입니다.' });
            })
            .finally(() => {
                setIsLoading(false);
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
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} requiredMark={false}>
                <Flex gap="xsmall" vertical className={Style.inputs}>
                    <Form.Item
                        name="id"
                        rules={[
                            { required: true, message: '이메일은 필수 항목입니다' },
                            { type: 'email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '이메일 형식이 잘못 되었습니다' },
                        ]}>
                        <Input size="large" placeholder="Email" autoComplete="off" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <Form.Item
                        name="pw"
                        rules={[
                            { required: true, message: '비밀번호는 필수 항목입니다' },
                            { min: 4, message: '비밀번호는 4글자 이상 입니다' },
                        ]}>
                        <Input.Password size="large" placeholder="Password" autoComplete="new-password" prefix={<KeyOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <div className={Style.guest}>
                        <Switch size="small" onChange={setGuest} />
                        <Tooltip title="Guest계정의 정보로 로그인 합니다.">
                            <Space>
                                <span>Guest 계정 사용</span>
                                <InfoCircleOutlined />
                            </Space>
                        </Tooltip>
                    </div>
                    <div className={Style.btns}>
                        <Button type="primary" size="large" htmlType="submit" shape="round" icon={<LoginOutlined />} loading={isLoading}>
                            Sign in
                        </Button>
                    </div>
                </Flex>
            </Form>
            {contextHolder}
        </div>
    );
};

export { Login };
