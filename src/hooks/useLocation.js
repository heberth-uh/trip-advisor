import { useState } from "react";
import { locationsSample } from "../data/locations.sample";
import { getLocation } from "../api/tripAdvisorApi";

export const useLocations = (searchString) => {
    const [locations, setLocations] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const searchLocations = async () => {
        setIsLoading(true)

        // const data = await getLocation({searchString})
        // let filtered = data.data.filter(location => location.result_type === 'geos')
        // console.log('locations', filtered)
        // setLocations(filtered)
        // setIsLoading(false)

        // For testing with static data 
        setTimeout(() => {
            let filtered = locationsSample.data.filter(location => location.result_type === 'geos')
            setLocations(filtered)
            setIsLoading(false)
        }, 500);
    }
    return { locations, searchLocations, isLoading }
}
