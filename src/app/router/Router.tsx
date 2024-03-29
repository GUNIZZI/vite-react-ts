import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from '@/app/App';
import { AppLoader } from '@/app/App.loader';
import { Login, LoginLoader } from '@/pages/member/login';
import { StoryList, StoryView, StoryRegist } from '@/pages/story/index';
import { Tech, TechLoader } from '@/pages/tech/index';
import { AuthRouter } from '@/pages/works/authRouter/Index';
import { Calcurator } from '@/pages/works/calcurator/Index';

import NotFound from '@/pages/err/notFound';
import { LoaderClock } from '@/widget/loader';

import { AuthGuard } from './AuthGuard';
import { PrivateGuard } from './PrivateGuard';

/**
 * fallbackElement
 * - RouterProvider에 선언하며 App이 로드 되는 동안 보여지는 UI
 *
 * loader
 * - before loader의 개념
 * - 로딩 UI는 App.tsx에서 구성(네비게이션의 state가 loading일때 페이지 단위의 로더 스타일 적용)
 */

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound status="404" />,
        loader: AppLoader,
        children: [
            {
                path: '/login',
                loader: LoginLoader,
                element: <Login />,
            },
            {
                path: '/story',
                children: [
                    {
                        path: '',
                        element: <Navigate to="list" />,
                    },
                    {
                        path: 'list',
                        element: <StoryList />,
                    },
                    {
                        path: 'view',
                        element: <StoryView />,
                    },
                    {
                        path: 'regist',
                        element: <PrivateGuard />,
                        children: [
                            {
                                path: '',
                                element: <StoryRegist />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/tech',
                element: <AuthGuard />,
                loader: TechLoader,
                children: [
                    {
                        path: '',
                        element: <Tech />,
                    },
                ],
            },
            {
                path: '/works',
                children: [
                    {
                        path: '',
                        element: <Navigate to="authRouter" />,
                    },
                    {
                        path: 'authrouter',
                        element: <AuthRouter />,
                    },
                    {
                        path: 'calcurator',
                        element: <Calcurator />,
                    },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routes, {
    basename: '/vite-react-ts/',
});

const Routers = () => {
    return <RouterProvider router={router} fallbackElement={<LoaderClock active />}></RouterProvider>;
};

export default Routers;
