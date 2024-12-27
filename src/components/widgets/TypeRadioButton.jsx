// Components
import { MdOutlineAttractions } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";
import { FaBed } from "react-icons/fa";

export default function TypeRadioButton({ options, defaultValue, handlerValue }) {
    const typeIcons = [
        {
            'name': 'attractions',
            'icon': <MdOutlineAttractions />
        },
        {
            'name': 'restaurants',
            'icon': <IoMdRestaurant />
        },
        {
            'name': 'hotels',
            'icon': <FaBed />
        },
    ]

    return (
        <ul className="flex justify-around items-center gap-3 max-w-full overflow-x-auto scrollbar-invisible mb-4 lg:hidden">
            {
                options.map(option => (
                    <button
                        key={option.id}
                        onClick={() => handlerValue(option.value)}
                        className={`flex justify-center items-center gap-1 py-3 px-3 rounded-lg cursor-pointer ${option.value === defaultValue ? 'bg-black text-white hover:bg-black/80' : 'bg-secondary hover:bg-light-gray'}`}>
                        <span className="text-lg">
                            {typeIcons.filter(icon => (icon.name == option.value))[0].icon}
                        </span>
                        <span className="text-sm">
                            {option.name}
                        </span>
                    </button>
                ))
            }
        </ul>
    )
}
