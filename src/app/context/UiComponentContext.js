import { createContext, useState } from 'react'

export const UiComponentContext = createContext({
    name: '',
    component: null,
    props: {},
    showUiComponent: () => {},
    hideUiComponent: () => {},
})

export const UiComponentProvider = (props) => {
    const [UiComponent, setUiComponent] = useState({
        name: '',
        component: null,
        props: {},
        showUiComponent: () => {},
        hideUiComponent: () => {},
    });

    const showUiComponent = (component, props = {}) => {
        setUiComponent({
            component,
            props,
        })
    }

    const hideUiComponent = () =>{
        setUiComponent({
            component: null,
            props: {},
        })
    }

    const UiState = {
        name: UiComponent.name,
        component: UiComponent.component,
        props: UiComponent.props,
        showUiComponent: showUiComponent,
        hideUiComponent: hideUiComponent
    }

    return (
        <UiComponentContext.Provider value={UiState}>
          {props.children}
        </UiComponentContext.Provider>
    );
}

export default UiComponentContext
