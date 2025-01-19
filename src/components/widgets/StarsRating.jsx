// Icons
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

export default function StarsRating({ rate, size='sm', hideNumber = false }) {
    const fullStarsAmount = Math.floor(parseFloat(rate)) // Get the amount full stars
    const stars = new Array(fullStarsAmount).fill(1) // Create an array with the amount of full stars represented by 1
    if (parseFloat(rate) % fullStarsAmount > 0) stars.push(0) // Add a 0 (which represents a half star) if rating has float number

    return (
        <div className="flex items-center gap-[5px] xl:gap-2">
            {
                !hideNumber &&
                <span className={`${size == 'sm' ? 'text-sm lg:text-base xl:text-lg' : size == 'lg' ? 'text-2xl xl:text-[34px] font-light leading-none xl:font-extralight' : ''}`}>
                    {rate}
                </span>
            }
            <div className="flex items-center gap-[2px] pb-[3px] xl:pb-[4px]">
                {stars.map((star, key) =>
                    <span key={key} className={`text-highlight ${size == 'sm' ? 'text-base xl:text-xl' : size == 'lg' ? 'text-2xl xl:text-3xl' : ''}`}>
                        {star == 1 ? <FaStar /> : <FaStarHalf />}
                    </span>
                )}
            </div>
        </div>
    )
}
