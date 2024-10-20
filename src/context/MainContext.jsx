import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const MainContext = createContext()

export function MainContextProvider({ children }) {
    // general parameters
    const [lang, setLang] = useLocalStorage('lang', 'en_US')
    const [units, setUnits] = useLocalStorage('units', 'km')
    const [currency, setCurrency] = useState('USD') // currency code
    const [type, setType] = useLocalStorage('type', 'attractions')
    // contextual params (depends on the type)
    const [sort, setSort] = useState('relevance') // relevance | distance
    const [sortPlaces, setSortPlaces] = useState('recommended') // recommended | ranking
    const [minRate, setMinRate] = useState(3) // 3|4|5

    const typeList = [
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
    const langList = [
        { 'id': 1, 'value': 'en_US', 'name': 'English' },
        { 'id': 2, 'value': 'es_MX', 'name': 'Español (México)' },
        { 'id': 3, 'value': 'es_ES', 'name': 'Español (España)' },
        { 'id': 4, 'value': 'de_DE', 'name': 'Deutsch' },
        { 'id': 5, 'value': 'fr_FR', 'name': 'France' },
        { 'id': 6, 'value': 'it_IT', 'name': 'Italiano' },
        { 'id': 7, 'value': 'pt_BR', 'name': 'Português (Brasil)' },
        { 'id': 8, 'value': 'pt_PT', 'name': 'Português (Portugal)' },
        { 'id': 9, 'value': 'tr_TR', 'name': 'Türkçe' },
        { 'id': 10, 'value': 'el_GR', 'name': 'Ελληνικά' },
    ]
    const unitList = [
        { 'id': 1, 'value': 'km', 'name': 'Km' },
        { 'id': 2, 'value': 'mi', 'name': 'Mi' },
    ]

    return (
        <MainContext.Provider value={{
            lang, setLang,
            units, setUnits,
            currency,
            type, setType,
            sort,
            sortPlaces,
            minRate,
            typeList, langList, unitList
        }}
        >
            {children}
        </MainContext.Provider>
    )
}

