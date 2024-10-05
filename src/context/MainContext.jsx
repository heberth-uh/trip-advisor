import { createContext, useState } from 'react'

export const MainContext = createContext()

export function MainContextProvider({children}) {
    
    const [lang, setLang] = useState('en_US')
    const [units, setUnits] = useState('km')

    return (
        <MainContext.Provider value={{
            lang,
            units
        }}
        >
            {children}
        </MainContext.Provider>
    )
}

