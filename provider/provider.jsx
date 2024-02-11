import { createContext , useContext , useState } from 'react'

export const globalContext = createContext()


// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStore = () => {
    const value = useContext(globalContext)
    return value
}

const Provider = ({ children }) => {
    const [activeProduct,setActiveProduct] = useState([])
    const Component = globalContext.Provider
    
    const values = {
        activeProduct,
        setActiveProduct,
    }


    return (
        <Component value={values}>
            {
                children
            }
        </Component>
    )
}

export default Provider