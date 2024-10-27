import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import { getPlacesList } from "../api/tripAdvisorApi";
// Samples
import attractionsSample from "../data/test/places.attraction.json"
import restaurantsSample from "../data/test/places.restaurant.json"
import hotelsSample from "../data/test/places.hotel.json"

export const usePlacesList = (locationId) => {
    const { type, lang, units, currency, sortPlaces } = useContext(MainContext)

    const [places, setPlaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Fetch a list of places (attractions, restaurants, hotels) by location
        // const fetchPlaces = async () => {
        //     try {
        //         const data = await getPlacesList({ type, locationId, lang, units, currency, sortPlaces })
        //         // for some locations, it gets 200 as response but there is 'errors' node in the object instead 'data'
        //         if (data.errors) throw new Error(data.errors[0].message || `Error fetching ${type}`)
        //         const filteredData = data.data?.filter(place => (!place.detail)) // detial: 0 means it doesn't have detials. Remnove them.
        //         setPlaces(filteredData)
        //     } catch (error) {
        //         alert(error) // define an error state instead an alert
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchPlaces()

        // testing with static data
        setTimeout(() => {
            var placesSample = null
            switch (type) {
                case 'attractions':
                    placesSample = attractionsSample.data
                    break;
                case 'hotels':
                    placesSample = hotelsSample.data
                    break;
                case 'restaurants':
                    placesSample = restaurantsSample.data
                    break;
            }
            const filteredPlaces = placesSample?.filter(place => (!place.detail)) // detial: 0 means it doesn't have detials. Remnove them.
            setPlaces(filteredPlaces)
            setIsLoading(false)
        }, 500);

    }, [locationId, type])

    return { places, isLoading }
}