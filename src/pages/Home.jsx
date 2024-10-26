import { useState, useContext } from 'react'
import { useLocations } from '../hooks/useLocation.js'
import { MainContext } from '../context/MainContext.jsx'
// Components
import Navbar from '../components/Navbar.jsx'
import SelectionField from '../components/widgets/SelectionField.jsx'
import LocationResults from '../components/LocationResults.jsx'

export default function Home() {
    const [searchString, setSearchString] = useState('')
    const { type, setType, typeList } = useContext(MainContext)
    const { locations, searchLocations, isLoading, error } = useLocations(searchString)

    const handleSubmit = (e) => {
        e.preventDefault();
        searchLocations()
    }

    return (
        <>
            <Navbar />
            <main>
                <h1>Where to go?</h1>
                <form onSubmit={handleSubmit}>
                    <p>Search for {type} in...</p>
                    <SelectionField options={typeList} defaultValue={type} handlerValue={setType} />
                    <input
                        type="text"
                        placeholder='Paris, Madrid, New York...'
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={isLoading}>Search</button>
                </form>
                <section className='location-card'>
                    <LocationResults
                        searchString={searchString}
                        locations={locations}
                        isLoading={isLoading}
                        error={error}
                    />
                </section>
            </main>
        </>
    )
}