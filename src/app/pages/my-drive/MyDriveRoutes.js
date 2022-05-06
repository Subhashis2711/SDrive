import React, { lazy } from 'react'
import Loadable from '../../components/UI/Loadable/Loadable';

const MyDrive = Loadable(lazy(() => import("./MyDrive")));
const Shared = Loadable(lazy(() => import("./Shared")));
const Recent = Loadable(lazy(() => import("./Recent")));
const Starred = Loadable(lazy(() => import("./Starred")));
const Bin = Loadable(lazy(() => import("./Bin")));


const MyDriveRoutes = [
    {
        path: '/my-drive',
        element: <MyDrive />
    },
    {
        path: '/shared',
        element: <Shared />
    },
    {
        path: '/recent',
        element: <Recent />
    },
    {
        path: '/starred',
        element: <Starred />
    },
    {
        path: '/bin',
        element: <Bin />
    },
]

export default MyDriveRoutes;
