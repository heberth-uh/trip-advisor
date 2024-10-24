import { useContext, useState } from "react";
import { getLocation } from "../api/tripAdvisorApi";
import { MainContext } from "../context/MainContext";
// Samples
import { locationsSample } from "../data/test/locations.sample";

export const useLocations = (searchString) => {
    const { lang, units, currency, sort } = useContext(MainContext)

    const [locations, setLocations] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const searchLocations = async () => {
        setIsLoading(true)

        // try {
        //     const data = await getLocation({ searchString, lang, units, currency, sort })
        //     console.log('data', data)
        //     if (data.errors) throw new Error(data.errors[0].message || `Error getting results`)
        //     let filtered = data.data.filter(location => location.result_type === 'geos')
        //     setLocations(filtered)
        // } catch (error) {
        //     setError(error.toString())
        // } finally {
        //     setIsLoading(false)
        // }

        // For testing with static data
        setTimeout(() => {
            let filtered = locationsSample.data.filter(location => location.result_type === 'geos')
            setLocations(filtered)
            setIsLoading(false)
        }, 500);
    }
    return { locations, searchLocations, isLoading, error }
}
