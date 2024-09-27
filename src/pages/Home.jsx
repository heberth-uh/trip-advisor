import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { locationsSample } from '../data/locations.sample.js'
export default function Home() {



    const [locations, setLocations] = useState()
    const [searchString, setSearchString] = useState('')

    const navigate = useNavigate();
    const API_KEY = import.meta.env.VITE_X_RAPIDAPI_KEY
    // location/search
    const url = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${searchString}&lang=en_US&units=km`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    useEffect(() => {

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setLocations(data.data)
        //     })

        // navigator.geolocation.getCurrentPosition( (position) => {
        //     // console.log('position', position)
        //     setLatitude(position.coords.latitude)
        // }, (error) => console.log('error', error))
        let filtered = locationsSample.filter(place => 'detailsV2' in place)

        console.log('filetred', filtered)

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search', searchString)
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.data.Typeahead_autocomplete.results);
        //         setLocations(data.data.Typeahead_autocomplete.results)
        //     })
        let filtered = locationsSample.filter(place => 'detailsV2' in place)
        console.log('filetred', filtered)
        setLocations(filtered)
    }

    return (
        <main>
            <h1>Where to go?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Paris, Madrir, Hawai...'
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <section className='location-card'>
                {locations && locations.map((location, id) => (
                    <article key={id}>
                        <div onClick={() => navigate(`/location/${60763}`)}>
                            <img src={location.image?.photo?.photoSizes.slice(-4)[0].url} alt={location.detailsV2?.names?.name} />
                            <h4>{location.detailsV2.names?.name}, {location.detailsV2.names.longOnlyHierarchyTypeaheadV2}</h4>
                            {/* <Link to={`/location/${60763}`}>
                            </Link> */}
                        </div>
                        <p>{location.detailsV2.locationId}</p>
                        <hr />
                    </article>
                ))}
            </section>
        </main>
    )
}