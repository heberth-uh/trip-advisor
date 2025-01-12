import { useParams } from 'react-router-dom'
// Components
import ImagePlace from './ImagePlace'
import Tag from './common/Tag';
// Icons
import { IoLocationSharp } from "react-icons/io5";
import StarsRating from './widgets/StarsRating';

export default function PlaceCard({ place, simpleView = false }) {
    const params = useParams()
    const type = params.type
    const formattedAdress = place.address_obj?.street1
        ? `${place.address_obj?.street1}, ${place.address_obj?.postalcode}`
        : place.address_obj?.street2
            ? `${place.address_obj?.street2}, ${place.address_obj?.postalcode}`
            : place.address
    const address = type === 'hotels' ? place.location_string : formattedAdress
    const placeUrl = `/${type}/get-details/${place.location_id}`

    return (
        <div className='flex gap-3 md:gap-4 xl:gap-5'>
            <ImagePlace location_id={place.location_id} url={placeUrl} imageUrl={place.photo?.images?.large?.url} largeImage={true} />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-[2px] xl:gap-1'>
                    <StarsRating rate={place.rating} />
                    <a href={placeUrl} className='cursor-pointer hover:underline'>
                        <h3 className='text-sm md:text-base xl:text-lg font-semibold'>
                            {place.name}
                        </h3>
                    </a>
                    <p>{place.price}</p>
                    <p className='text-xs md:text-sm xl:text-base flex gap-1'>
                        <span className='pt-[2px] xl:pt-[4px]'>
                            <IoLocationSharp />
                        </span>
                        <span className='md:font-light'>
                            {address}
                        </span>
                        <br />
                    </p>
                    {   place.description &&
                        <p className='hidden xl:block text-base font-extralight mt-2'>
                            {place.description.split('').slice(0, 450).join('') + '...'} <a className='font-normal text-highlight cursor-pointer'>See more</a>
                        </p>
                    }
                </div>
                <div className='flex'>
                    {place.open_now_text &&
                        <Tag bg={'bg-highlight'}>
                            {place.open_now_text}
                        </Tag>
                    }
                </div>
            </div>
        </div>
    )
}