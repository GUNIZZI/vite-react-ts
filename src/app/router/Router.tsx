import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/app/App';
import { Login, LoginLoader } from '@/pages/member/login';
import { Story } from '@/pages/story/index';
import { Board, BoardLoader } from '@/pages/board/index';

import { AuthGuard } from './AuthGuard';
// import { PrivateGuard } from './PrivateGuard';
import NotFound from '@/pages/err/notFound';

// function sleep(ms: number): Promise<void> {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
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
        children: [
            {
                path: '/login',
                loader: LoginLoader,
                element: <Login />,
            },
            {
                path: '/story',
                element: <Story />,
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
    return <RouterProvider router={router} fallbackElement={<span>Content Loading...</span>}></RouterProvider>;
};

export default Routers;
