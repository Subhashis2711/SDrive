import { useContext } from "react";
import { UiComponentContext } from "app/context/UiComponentContext";

const useUiComponent = () => useContext(UiComponentContext)

export default useUiComponent