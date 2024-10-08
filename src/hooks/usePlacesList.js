import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import { getPlacesList } from "../api/tripAdvisorApi";
// Samples
import { attractionsSample } from "../data/attractions.sample";

export const usePlacesList = (locationId) => {
    const [places, setPlaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { type } = useContext(MainContext)

    useEffect(() => {
        // // Fetch a list of places (attractions, restaurants, hotels) by location
        // const fetchPlaces = async () => {
        //     try {
        //         const data = await getPlacesList({ locationId, type })
        //         // for some locations, it gets 200 as response but there is 'errors' node in the object instead 'data'
        //         if (data.errors) throw new Error(data.errors[0].message || `Error fetching ${type}`)
        //         setPlaces(data.data)
        //     } catch (error) {
        //         alert(error) // define a error state instead an alert
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchPlaces()

        // testing with static data 
        setTimeout(() => {
            setPlaces(attractionsSample.data)
            setIsLoading(false)
        }, 1000);
    }, [])

    return { places, isLoading}
}