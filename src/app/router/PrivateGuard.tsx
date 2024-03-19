import { Outlet, Navigate } from 'react-router-dom';
import { userStore } from '../store/user';
import { useEffect } from 'react';

const PrivateGuard = () => {
    const { name } = userStore();

    useEffect(() => {
        if (!!name === false) {
            alert('관리자만 접근 가능한 페이지 입니다.');
        }
    }, []);

    return !!name == true ? <Outlet /> : <Navigate to="../" replace />;
};

export { PrivateGuard };
