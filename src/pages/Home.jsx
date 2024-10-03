import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocations } from '../hooks/useLocation.js'

export default function Home() {

    const [searchString, setSearchString] = useState('')
    const { locations, searchLocations } = useLocations(searchString)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchLocations()
    }

    return (
        <main>
            <h1>Where to go?</h1>
            <form onSubmit={handleSubmit}>
                {/* // prevent multi submit */}
                <input
                    type="text"
                    placeholder='Paris, Madrir, Hawai...'
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            <section className='location-card'>
                {locations && locations.map(({result_object}, id) => (
                    <article key={id}>
                        <div onClick={() => navigate(`/location/${result_object.locations_id}`)}>
                            <img src={result_object.photo?.images?.medium.url } alt={result_object.location_string} />
                            <h4>{result_object.name}</h4>
                        </div>
                        <p>{result_object.location_string}</p>
                        <p>{result_object.subcategory[0].name}</p>
                        <hr />
                    </article>
                ))}
            </section>
        </main>
    )
}