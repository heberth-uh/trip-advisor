import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { attractionDetailSample } from '../data/attractionDetailSample';

export default function AttractionDetailPage() {

    const params = useParams();
    const [attraction, setAttraction] = useState({})

    const attractionId = params.attractionId
    const url = `https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=${attractionId}&currency=USD&lang=en_US`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };
    useEffect(() => {

        // fetch(url, options)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setAttraction(data)
        // })
        setAttraction(attractionDetailSample)
    }, [attractionDetailSample])

    return (
        <main>
            <section>
                <article>
                    <h1>{attraction.name}</h1> <span>{attraction.ranking}</span>
                    <img src={attraction.photo?.images?.large.url} alt={attraction.name} />
                    <p>{attraction.rating}</p>
                    <p>{attraction.open_now_text}</p>
                    <p>{attraction.location_string}</p>
                    {attraction.recommended_visit_length &&
                        <div>
                            <p>{attraction.recommended_visit_length}</p>
                        </div>
                    }
                    <div>
                        <h3>About</h3>
                        <p>{attraction.description}</p>
                    </div>
                    <div>
                        {
                            attraction.subcategory && attraction.subcategory.map(subcategory => (
                                <p key={subcategory.key}>#{subcategory.name}</p>
                            ))
                        }
                        <a href={attraction.write_review} target='_blank'>Want a write a review?</a>
                    </div>
                    <div>
                        <h3>More information</h3>
                        <p>address: <span>{attraction.address}</span></p>
                        <p>address: <span>{attraction.address}</span></p>
                        <p>phone: <span>{attraction.phone}</span></p>
                        <p>website: <span>{attraction.website}</span></p>
                    </div>
                </article>
                <article>
                    <h3>Reviews</h3>
                    {
                        // HERE GOES REVIES COMPONENT
                        attraction.reviews &&
                        attraction.reviews.map( review => (
                            <div key={review.review_id}>
                                <p>@{review.author}</p>
                                <p>Rating: <span>{review.rating}</span></p>
                                <p>{review.title}</p>
                                <p>{review.summary}</p>
                                <hr />
                            </div>
                        ))
                    }
                </article>
            </section>
        </main>
    )
}