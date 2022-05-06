import Layout from '../components/Layouts/Layout'
import { Navigate } from 'react-router-dom'

import MyDriveRoutes from 'app/pages/my-drive/MyDriveRoutes';
import AuthRoutes from 'app/pages/auth/AuthRoutes';
import NotFound from 'app/pages/auth/NotFound';
import AuthGuard from 'app/auth/AuthGuard';

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <AuthGuard>
                    <Layout />
                </AuthGuard>
            ),
            children: [...MyDriveRoutes ],
        },
        ...AuthRoutes,
        {
            path: '/',
            element: (
                <AuthGuard>
                    <Navigate to="/my-drive" />

                </AuthGuard>
            ),
        },
        {
            path: '*',
            element: <NotFound />,
        },
        
    ]

    return all_routes;
}