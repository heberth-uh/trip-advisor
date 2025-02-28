import { createContext, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
// Data
import { currencies } from '../data/currencies'
import popularCitiesData from  '../data/popularCities.json'
import popularAttractionsData from  '../data/popularAttractions.json'
export const MainContext = createContext()

export function MainContextProvider({ children }) {
    // Static data
    const [popularCities, setPopularCities] = useState([])
    const [popularAttractions, setPopularAttractions] = useState([])
    // general parameters
    const [lang, setLang] = useLocalStorage('lang', 'en_US')
    const [units, setUnits] = useLocalStorage('units', 'km')
    const [currency, setCurrency] = useLocalStorage('currency', 'USD')
    const [currencyList, setCurrencyList] = useState([])
    const [type, setType] = useLocalStorage('type', 'attractions')
    // contextual params (depends on the type)
    const [sort, setSort] = useState('relevance') // relevance | distance
    const [sortPlaces, setSortPlaces] = useState('recommended') // recommended | ranking
    const [minRating, setMinRating] = useState(false) // 3|4|5

    const searchInputRef = useRef(null)
    const searchFormRef = useRef(null)

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
        { 'id': 1, 'value': 'en_US', 'name': 'English', 'code': 'EN' },
        { 'id': 2, 'value': 'es_MX', 'name': 'Español (México)', 'code': 'ES' },
        { 'id': 3, 'value': 'es_ES', 'name': 'Español (España)', 'code': 'ES' },
        { 'id': 4, 'value': 'de_DE', 'name': 'Deutsch', 'code': 'DE' },
        { 'id': 5, 'value': 'fr_FR', 'name': 'France', 'code': 'FR' },
        { 'id': 6, 'value': 'it_IT', 'name': 'Italiano', 'code': 'IT' },
        { 'id': 7, 'value': 'pt_BR', 'name': 'Português (Brasil)', 'code': 'PT' },
        { 'id': 8, 'value': 'pt_PT', 'name': 'Português (Portugal)', 'code': 'PT' },
        { 'id': 9, 'value': 'tr_TR', 'name': 'Türkçe', 'code': 'TR' },
        { 'id': 10, 'value': 'el_GR', 'name': 'Ελληνικά', 'code': 'EL' },
    ]
    const unitList = [
        { 'id': 1, 'value': 'km', 'name': 'Km' },
        { 'id': 2, 'value': 'mi', 'name': 'Mi' },
    ]
    const sortList = [
        { 'id': 1, 'value': 'relevance', 'name': 'Relevance'},
        { 'id': 2, 'value': 'distance', 'name': 'Distance'}
    ]
    const sortPlacesList = [
        { 'id': 1, 'value': 'recommended', 'name': 'Recommended'},
        { 'id': 2, 'value': 'ranking', 'name': 'Ranking'}
    ]
    const minRatingList = [
        { 'id': 1, 'value': false, 'name': 'All'},
        { 'id': 2, 'value': '3', 'name': '3'},
        { 'id': 3, 'value': '4', 'name': '4'},
        { 'id': 4, 'value': '5', 'name': '5'},
    ]

    useEffect(()=>{
        setPopularCities(popularCitiesData.data)
        setPopularAttractions(popularAttractionsData.data)
        setCurrencyList(currencies.data)
    }, [])

    // Scroll to a given element (useRef) with a certain offset
    const scrollToElement = (offset, elementRef) => {
        if (!elementRef.current) return
        const elementPosition = elementRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo( {top: offsetPosition} )
    }

    return (
        <MainContext.Provider value={{
            popularCities, popularAttractions,
            lang, setLang, langList,
            units, setUnits, unitList,
            currency, setCurrency, currencyList,
            type, setType, typeList,
            sort, setSort, sortList,
            sortPlaces, setSortPlaces, sortPlacesList,
            minRating, setMinRating, minRatingList,
            // useRefs
            searchInputRef, searchFormRef,
            // functions
            scrollToElement
        }}
        >
            {children}
        </MainContext.Provider>
    )
}

