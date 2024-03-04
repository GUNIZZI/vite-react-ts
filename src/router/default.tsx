import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import Login from '@/views/member/login/Login';
import Story from '@/views/story/Index';
import Board from '@/views/board/Index';

import PrivateRoute from './PrivateRoute';
import NotFound from '@/views/err/notFound';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound status="404" />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/story',
                element: <Story />,
            },
            {
                path: '/board',
                element: <PrivateRoute />,
                children: [{ path: '', element: <Board /> }],

                // element: (
                //     <PrivateRoute authentication={true}>
                //         <Board />
                //     </PrivateRoute>
                // ),
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

// const routerInit = await createBrowserRouter(routes, {
//     basename: '/vite-react-ts/',
// });

// export const routerInit = () => {
//     return createBrowserRouter(routes, {
//         basename: '/vite-react-ts/',
//     });
// };

export const Routers = createBrowserRouter(routes, {
    basename: '/vite-react-ts/',
});
