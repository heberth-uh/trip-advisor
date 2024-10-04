import { useEffect, useState } from "react";
// Sample reviews
import { attractionDetailSample } from '../data/attractionDetailSample.js';

export const useAttraction = (attractionId) => {
    const [attraction, setAttraction] = useState({})

    const url = `https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=${attractionId}&currency=USD&lang=en_US`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };
    useEffect(() => {
        // fetch(url, options)
        // .then(res => res.json())
        // .then(data => {
        //     setAttraction(data)
        // })

        setAttraction(attractionDetailSample)
    }, [])

    return { attraction }
}