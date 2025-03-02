import { useContext, useEffect, useRef, useState } from "react";
import { getLocation } from "../api/tripAdvisorApi";
import { MainContext } from "../context/MainContext";
import { useURLParam } from "./useURLParam";
// Samples
// import { locationsSample } from "../data/test/locations.sample";

export const useLocations = (search) => {
    const { lang, units, currency, sort } = useContext(MainContext)

    const [locations, setLocations] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const isFirstSearch = useRef(true)

    const searchParam = useURLParam('search')

    useEffect(() => {
        // fetch if there's a search query and some states change
        if (searchParam) searchLocations()
    }, [lang, currency, units, sort])

    const searchLocations = async () => {
        setIsLoading(true)
        if (isFirstSearch.current) isFirstSearch.current = false

        const query = search || searchParam
        try {
            const data = await getLocation({ query, lang, units, currency, sort })
            console.log('locations data', data)
            if (data.message || data.errors) throw new Error(data.message || data.errors[0].message || `Error getting results`)
            // Add filter subcategory city, region. We need to esclud country, state due they don't show any results.
            let filtered = data.data.filter(location => location.result_type === 'geos')
            setLocations(filtered)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }

        // For testing with static data
        // if (search == 'notfound') {
        //     setLocations([])
        //     setIsLoading(false)
        //     return
        // }
        // setTimeout(() => {
        //     let filtered = locationsSample.data.filter(location => location.result_type === 'geos')
        //     setLocations(filtered)
        //     setIsLoading(false)
        // }, 500);
    }
    return { locations, searchLocations, isLoading, isFirstSearch, error }
}
