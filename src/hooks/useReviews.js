import { useEffect, useState } from "react"
import {reviewsSample} from "../data/reviewsSample.js"

export const useReviews = (place) => {
    const [reviews, setReviews] = useState([])

    const url = `https://travel-advisor.p.rapidapi.com/reviews/list?location_id=${place.location_id}&limit=20&currency=USD&lang=en_US`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    };

    useEffect(()=> {
        // fetch(url, options)
        // .then(res => res.json())
        // .then( data => {
        //     setReviews(data.data)
        // })

        setReviews(reviewsSample.data)
    }, [place])

    return {reviews}
}