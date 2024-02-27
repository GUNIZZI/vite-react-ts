import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import Story from '@/views/story/Index';
import Board from '@/views/board/Index';
import Works_AuthRouter from '@/views/works/authRouter/Index';

import NotFound from '@/views/err/notFound';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound status="404" />,
        children: [
            {
                path: '/story',
                element: <Story />,
            },
            {
                path: '/board',
                element: <Board />,
            },
            {
                path: '/works',
                children: [
                    {
                        path: '',
                        element: <Navigate to="authRouter" />,
                    },
                    {
                        path: 'authRouter',
                        element: <Works_AuthRouter />,
                    },
                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routes, {
    basename: '/vite-react-ts/',
});
