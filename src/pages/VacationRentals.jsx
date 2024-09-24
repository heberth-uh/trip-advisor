import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VacationRentals() {

    const params = useParams()

    const locationId = params.locationId
    const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/rentals/rentalSearch?sortOrder=POPULARITY&page=1&currencyCode=USD';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <main>VacationRentals</main>
    )
}
