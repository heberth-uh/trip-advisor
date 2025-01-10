// Icons
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

export default function StarsRating({ rate, hideNumber = false }) {
    const fullStarsAmount = Math.floor(parseFloat(rate)) // Get the amount full stars
    const stars = new Array(fullStarsAmount).fill(1) // Create an array with the amount of full stars represented by 1
    if (parseFloat(rate) % fullStarsAmount > 0) stars.push(0) // Add a 0 (which represents a half star) if rating has float number

    return (
        <div className="flex gap-[5px]">
            {
                !hideNumber &&
                <span className="text-sm">
                    {rate}
                </span>
            }
            <div className="flex gap-[2px]">
                {stars.map((star, key) =>
                    <span key={key} className="text-highlight">
                        {star == 1 ? <FaStar /> : <FaStarHalf />}
                    </span>
                )}
            </div>
        </div>
    )
}
