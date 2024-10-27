import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { usePlacesList } from '../hooks/usePlacesList'
// Components
import Navbar from '../components/Navbar'
import PlaceCard from '../components/PlaceCard'

export default function PlacesPage() {
    const params = useParams()
    const locationId = params.locationId

    const { type } = useContext(MainContext)
    const { places, isLoading } = usePlacesList(locationId)

    return (
        <>
            <Navbar />
            <main>
                <h2>{type.charAt(0).toUpperCase() + type.slice(1)} results</h2>
                <section>
                    {
                        isLoading && <div>Loading...</div>
                    }
                    {
                        places && places.map((place, key) => (
                            <PlaceCard key={key} place={place} type={type} />
                        ))
                    }
                </section>
            </main>
        </>
    )
}
