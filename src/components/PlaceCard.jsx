import { Link, useParams } from 'react-router-dom'
// Components
import ImagePlace from './ImagePlace'
// Icons
import { IoLocationSharp } from "react-icons/io5";

export default function PlaceCard({ place, simpleView = false }) {
    const params = useParams()
    const type = params.type
    const formattedAdress = place.address_obj?.street1
        ? `${place.address_obj?.street1}, ${place.address_obj?.postalcode}`
        : place.address_obj?.street2
            ? `${place.address_obj?.street2}, ${place.address_obj?.postalcode}`
            : place.address
    const address = type === 'hotels' ? place.location_string : formattedAdress

    return (
        <div className='flex gap-3'>
            <ImagePlace location_id={place.location_id} url={`/${type}/get-details/${place.location_id}`} imageUrl={place.photo?.images?.large?.url} largeImage={true} />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-1'>
                    {place.rating && <div className='text-sm'>⭐ {place.rating}</div>}
                    <p className='text-sm font-semibold'>
                        {place.name}
                    </p>
                    {/* <p className={`${simpleView && 'hidden'}`}>
                        {place.description}
                    </p> */}
                    <p>{place.price}</p>
                    <p className='text-xs flex gap-1'>
                        <span className='pt-[2px]'>
                            <IoLocationSharp />
                        </span>
                        <span className=''>
                            {address}
                        </span>
                        <br />
                    </p>
                </div>
                <p>{place.open_now_text}</p>
            </div>
        </div>
    )
}