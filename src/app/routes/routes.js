import Layout from '../components/Layouts/Layout'
import { Navigate } from 'react-router-dom'

import MyDriveRoutes from 'app/pages/my-drive/MyDriveRoutes';
import AuthRoutes from 'app/pages/auth/AuthRoutes';
import NotFound from 'app/pages/auth/NotFound';

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <Layout />
            ),
            children: [...MyDriveRoutes ],
        },
        ...AuthRoutes,
        {
            path: '/',
            element: <Navigate to="/my-drive" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
        
    ]

    return all_routes;
}