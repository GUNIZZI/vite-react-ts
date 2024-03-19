import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from '@/app/App';
import { AppLoader } from '@/app/App.loader';
import { Login, LoginLoader } from '@/pages/member/login';
import { StoryList, StoryView, StoryRegist } from '@/pages/story/index';
import { Board, BoardLoader } from '@/pages/board/index';
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
                path: '/board',
                element: <AuthGuard />,
                loader: BoardLoader,
                children: [
                    {
                        path: '',
                        element: <Board />,
                    },
                ],
            },
            {
                path: '/works',
                children: [
                    // {
                    //     path: '',
                    //     element: <Navigate to="authRouter" />,
                    // },
                    // {
                    //     path: 'authRouter',
                    //     element: <Works_AuthRouter />,
                    // },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routes, {
    basename: '/vite-react-ts/',
});

const Routers = () => {
    return <RouterProvider router={router} fallbackElement={<LoaderClock />}></RouterProvider>;
};

export default Routers;
