import React, { lazy } from 'react'
import Loadable from '../../components/UI/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

const AuthRoutes = [
    {
        path: '/auth/signup',
        element: <JwtRegister />,
    },
    {
        path: '/auth/signin',
        element: <JwtLogin />,
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/auth/404',
        element: <NotFound />,
    },
]

export default AuthRoutes
