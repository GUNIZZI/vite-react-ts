import { Outlet, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fbAuth } from '@/shared/auth/firebase';
import { userStore } from '../store/user';

const PrivateGuard = () => {
    const { name } = userStore();

    useEffect(() => {
        if (!!fbAuth.currentUser?.uid === false) {
            alert('관리자만 접근 가능한 페이지 입니다.');
        }
    }, [name]);

    return !!fbAuth.currentUser?.uid == true ? <Outlet /> : <Navigate to="../" replace />;
};

export { PrivateGuard };
