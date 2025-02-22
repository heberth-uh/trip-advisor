import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
// Components
import Heading1 from "../common/Heading1";
// Icon
import { FaStar } from "react-icons/fa";

export function TopAttractions() {
    const { popularAttractions } = useContext(MainContext)
    return (
        <section className="px-4 md:px-0 bg-white">
            <div className="container py-16 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">
                <Heading1>
                    Top Attractions to visit
                </Heading1>
                <div className="flex items-start justify-start gap-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 overflow-x-auto scrollbar-invisible">
                    {
                        popularAttractions.map(attraction => (
                            <a key={attraction.location_id}
                                href={`/attractions/get-details/${attraction.location_id}`}
                                className="flex-none rounded-lg overflow-hidden max-w-[200px] md:max-w-full h-full bg-gray-100">
                                <div className="overflow-hidden">
                                    <img src={attraction.photo?.images?.large?.url} alt={attraction.photo?.caption}
                                        className="w-[200px] h-[150px] md:w-full md:h-[200px] lg:h-[150px] object-cover object-center scale-110 hover:scale-100 transition-all ease-out duration-500" />
                                </div>
                                <div className="py-2 px-3">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start">
                                        <p className="text-sm md:text-base font-semibold leading-noned">
                                            {attraction.name}
                                        </p>
                                        {attraction.rating && <div className="flex justify-center items-center gap-1">
                                            <span className="text-highlight"><FaStar/></span>
                                            <p className="text-sm md:text-base">{attraction.rating}</p>
                                        </div>}
                                    </div>
                                    <p className="text-xs md:text-sm font-normal">
                                        {attraction.location_string}
                                    </p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}