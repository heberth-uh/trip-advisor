import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const MainContext = createContext()

export function MainContextProvider({ children }) {
    // general parameters
    const [lang, setLang] = useState('en_US') // lenguage code
    const [units, setUnits] = useState('km') // km | mi
    const [currency, setCurrency] = useState('USD') // currency code
    const [type, setType] = useLocalStorage('type', 'attractions')
    // contextual params (depends on the type)
    const [sort, setSort] = useState('relevance') // relevance | distance
    const [sortPlaces, setSortPlaces] = useState('recommended') // recommended | ranking
    const [minRate, setMinRate] = useState(3) // 3|4|5

    const typesSelection = [
        {
            'id': 1,
            'name': 'Attractions',
            'value': 'attractions',
        }, {
            'id': 2,
            'name': 'Hotels',
            'value': 'hotels',
        },{
            'id': 3,
            'name': 'Restaurants',
            'value': 'restaurants',
        }
    ]

    return (
        <MainContext.Provider value={{
            lang,
            units,
            currency,
            type, setType,
            sort,
            sortPlaces,
            minRate,
            typesSelection
        }}
        >
            {children}
        </MainContext.Provider>
    )
}

