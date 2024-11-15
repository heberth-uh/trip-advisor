import { useContext, useEffect, useRef, useState } from "react";
import { getLocation } from "../api/tripAdvisorApi";
import { MainContext } from "../context/MainContext";
// Samples
import { locationsSample } from "../data/test/locations.sample";

export const useLocations = (searchString) => {
    const { lang, units, currency, sort } = useContext(MainContext)

    const [locations, setLocations] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const isFirstSearch = useRef(true)

    useEffect(() => {
        if (isFirstSearch.current && searchString !== '') {
            return
        }
    }, [searchString])

    const searchLocations = async () => {
        setIsLoading(true)
        if (isFirstSearch.current) isFirstSearch.current = false

        // try {
        //     const data = await getLocation({ searchString, lang, units, currency, sort })
        //     console.log('data', data)
        //     if (data.message || data.errors) throw new Error(data.message || data.errors[0].message || `Error getting results`)
        //     let filtered = data.data.filter(location => location.result_type === 'geos')
        //     setLocations(filtered)
        // } catch (error) {
        //     setError(error.message)
        // } finally {
        //     setIsLoading(false)
        // }

        // For testing with static data
        if (searchString == 'notfound') {
            setLocations([])
            setIsLoading(false)
            return
        }
        setTimeout(() => {
            let filtered = locationsSample.data.filter(location => location.result_type === 'geos')
            setLocations(filtered)
            setIsLoading(false)
        }, 500);
    }
    return { locations, searchLocations, isLoading, isFirstSearch, error }
}
