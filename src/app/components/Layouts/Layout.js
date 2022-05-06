import React from 'react'
import { Layouts } from './Layouts'

import useSettings from 'app/hooks/useSettings'
import CustomSuspense from '../UI/CustomSuspense/CustomSuspense'

const Layout = (props) => {
    const { settings } = useSettings()
    const Layout = Layouts[settings.activeLayout]

    return (
        <CustomSuspense>
            <Layout {...props} />
        </CustomSuspense>
    )
}

export default Layout
