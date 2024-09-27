import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { attractionsSample } from '../data/attractions.sample'

export default function AttractionsPage() {


    const params = useParams()
    const navigate = useNavigate()
    const locationId = params.locationId
    // attractions/list
    const url = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    const [attractions, setAttractions] = useState([])

    useEffect(() => {
        // Static information for a data structure and requests saving
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        setAttractions(attractionsSample.data)
    }, [attractionsSample])
    
    console.log('attractions', attractions)

    return (
        <main>
            <h2>Attraction results</h2>
            <section>
            {
                attractions && attractions.map( (attraction, key) => (
                    <div key={key} onClick={() => navigate(`/attraction/${8712073}`)}>
                        <img src={attraction.photo?.images?.small?.url} alt={attraction.photo?.caption} />
                        <p>{attraction.name}</p>
                        <p>{attraction.location_id}</p>
                        <p>{attraction.rating}</p>
                        <hr />
                    </div>
                ))
            }
            </section>
        </main>
    )
}
