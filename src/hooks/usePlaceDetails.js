import { useContext, useEffect, useState } from "react";
import { getPlacesDetails } from "../api/tripAdvisorApi.js";
import { MainContext } from "../context/MainContext.jsx";
// Sample reviews
import { attractionDetailSample } from '../data/test/attractionDetailSample.js';
import attractionSample from '../data/test/place.detail.attraction.json'
import restaurantSample from '../data/test/place.detail.restaurant.json'
import hotelSample from '../data/test/place.detail.hotel.json'
import { useParams } from "react-router-dom";

export const usePlaceDetails = (placeId) => {
    const params = useParams()
    const [place, setPlace] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const {currency, lang } = useContext(MainContext)
    const type = params.type

    useEffect(() => {
        // const fetchPlace = async () => {
        //     try {
        //         const data = await getPlacesDetails({ type, placeId, currency, lang })
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
            var placeSample = null
            switch (type) {
                case 'attractions':
                    placeSample = attractionSample
                    break;
                case 'hotels':
                    placeSample = hotelSample.data[0]
                    console.log(hotelSample)
                    break;
                case 'restaurants':
                    placeSample = restaurantSample
                    break;
            }
            setPlace(placeSample)
            setIsLoading(false)
        }, 500)
    }, [])

    return { place, isLoading, error }
}