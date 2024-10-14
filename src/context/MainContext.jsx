import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const MainContext = createContext()

export function MainContextProvider({ children }) {

    const [lang, setLang] = useState('en_US')
    const [units, setUnits] = useState('km')
    const [type, setType] = useLocalStorage('type', 'attractions')

    return (
        <MainContext.Provider value={{
            lang,
            units,
            type, setType
        }}
        >
            {children}
        </MainContext.Provider>
    )
}

