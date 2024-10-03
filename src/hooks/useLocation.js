import { useState } from "react";
import { locationsSample } from "../data/locations.sample";

export const useLocations = (searchString) => {
    const [locations, setLocations] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // location/search
    const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY
    const url = `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchString}&lang=en_US&units=km`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        },
        params: {
            query: searchString,
            limit: 30,
            units: 'km',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US',
            offset: 0,
        }
    };

    const searchLocations = () => {
        setIsLoading(true)

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         let filtered = data.data.filter(location => location.result_type === 'geos')
        //         console.log('locations', filtered)
        //         setLocations(filtered)
        //     }).finally(() => setIsLoading(false))

        // For testing with static data
        let filtered = locationsSample.data.filter(location => location.result_type === 'geos')
        setLocations(filtered)
        console.log('locations', filtered)
        setIsLoading(false)
    }
    return { locations, searchLocations, isLoading }
}
