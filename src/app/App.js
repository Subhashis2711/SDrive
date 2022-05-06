import React from 'react'
// import { Store } from './redux/Store'
// import { Provider } from 'react-redux'
import { AllPages } from './routes/routes'
import Theme from './components/Theme/Theme'
import { useRoutes } from 'react-router-dom'
// import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from '../app/context/SettingsContext'

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        // <Provider store={Store}>
            <SettingsProvider>
                <Theme>
                    {all_pages}
                </Theme>
            </SettingsProvider>
        // </Provider>
    )
}

export default App
