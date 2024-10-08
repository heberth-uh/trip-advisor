import { useContext, useEffect, useState } from "react";
import { getPlacesDetails } from "../api/tripAdvisorApi.js";
import { MainContext } from "../context/MainContext.jsx";
// Sample reviews
import { attractionDetailSample } from '../data/attractionDetailSample.js';

export const usePlaceDetails = (placeId) => {
    const [place, setPlace] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { type } = useContext(MainContext)

    // **params building for place fetching goes here
    console.log('type: ', type)
    useEffect(() => {
        // const fetchPlace = async () => {
        //     try {
        //         const data = await getPlacesDetails({ placeId, type })
        //         if (data.errors) throw new Error(data.errors[0].message || `Error fetching ${type} details`)
        //         setPlace(data)
        //     } catch (error) {
        //         alert(error)
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

    return { place, isLoading }
}