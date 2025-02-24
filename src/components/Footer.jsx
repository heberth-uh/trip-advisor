import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { Link } from "react-router-dom"
// Components
import Heading3 from "./common/Heading3"

export function Footer() {
    const { type, popularCities } = useContext(MainContext)

    return (
        <footer className="bg-lighter-gray">
            <div className="px-4 pt-4 pb-16 mx-auto container">
                <div className="grid grid-cols-1 gap-6 mt-5">

                    <div className="flex flex-col gap-y-2 text-sm">
                        <Heading3>Popular cities</Heading3>
                        {
                            popularCities.map(city => (
                                <Link key={city.id} to={`/${type}/results/location/${city.location_id}`} className="text-black hover:underline hover:text-gray-700">
                                    {city.full_name}
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </footer>
    )
}