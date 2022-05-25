import React from 'react'
import { AllPages } from './routes/routes'
import Theme from './components/Theme/Theme'
import { useRoutes } from 'react-router-dom'
import { AuthProvider } from '../app/context/JWTAuthContext'
import { SettingsProvider } from '../app/context/SettingsContext'
import { UiComponentProvider } from './context/UiComponentContext'

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <SettingsProvider>
            <Theme>
                <AuthProvider>
                    <UiComponentProvider>
                        {all_pages}
                    </UiComponentProvider>
                </AuthProvider>                
            </Theme>
        </SettingsProvider>
    )
}

export default App
