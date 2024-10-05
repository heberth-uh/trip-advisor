import { useEffect, useState } from "react";
// Sample
import { attractionsSample } from '../data/attractions.sample'
import { getAttractions } from "../api/tripAdvisorApi";

export const useAtractions = (locationId) => {
    const [attractions, setAttractions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        // const fetchAttractions = async () => {
        //     try {
        //         const data = await getAttractions({ locationId })
        //         // for some locations, it gets 200 as response but there is 'errors' node in the object instead 'data'
        //         if (data.errors) throw new Error(data.errors[0].message || 'Error fetching attractions')
        //         setAttractions(data.data)
        //     } catch (error) {
        //         alert(error) // define a error state instead an alert
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchAttractions()

        // For testing with static data
        setTimeout(() => {
            setAttractions(attractionsSample.data)
            setIsLoading(false)
        }, 1000);

    }, [])

    return { attractions, isLoading }
}
