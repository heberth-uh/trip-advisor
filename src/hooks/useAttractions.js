import { useEffect, useState } from "react";
// Sample
import { attractionsSample } from '../data/attractions.sample'

export const useAtractions = (locationId) => {
    const [attractions, setAttractions] = useState([])
    // attractions/list
    const url = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${locationId}&currency=USD&lang=en_US&lunit=km&sort=recommended`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };
    useEffect(() => {
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('data', data.data)
        //         setAttractions(data.data)
        //     })

        // For testing with static data
        setAttractions(attractionsSample.data)
    }, [])
    
    return {attractions}
}
