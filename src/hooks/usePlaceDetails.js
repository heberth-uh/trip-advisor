import { useContext, useEffect, useState } from "react";
import { getPlacesDetails } from "../api/tripAdvisorApi.js";
import { MainContext } from "../context/MainContext.jsx";
// Sample reviews
import { attractionDetailSample } from '../data/test/attractionDetailSample.js';

export const usePlaceDetails = (placeId) => {
    const [place, setPlace] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const { type, currency, lang } = useContext(MainContext)

    useEffect(() => {
        // const fetchPlace = async () => {
        //     try {
        //         const data = await getPlacesDetails({ type, placeId, currency, lang })
        //         console.log('data', data)
        //         if (data.message || data.errors) throw new Error(data.message || data.errors[0].message || `Error fetching ${type} details`)
        //         setPlace(data)
        //     } catch (error) {
        //         setError(error.message)
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchPlace()

        setTimeout( () => {
            setPlace(attractionDetailSample)
            setIsLoading(false)
        }, 500)
    }, [])

    return { place, isLoading, error }
}