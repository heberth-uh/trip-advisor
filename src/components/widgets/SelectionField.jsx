import { useEffect, useRef, useState } from "react";
// Icons
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export default function SelectionField({ children, options, defaultValue, handlerValue }) {
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef()
    const defaultOption = options.filter(option => option.value === defaultValue)[0]
    const defaultOptionValue = defaultOption.code || defaultOption.value

    const handleClickDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleChangeValue = (value) => {
        handlerValue(value)
        setShowDropdown(false)
    }

    useEffect(() => {
        let handleClickOutside = (e) => {
            if (showDropdown && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
    }, [showDropdown])

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={handleClickDropdown}
                className="flex items-center justify-center bg-secondary text-center text-sm font-medium uppercase rounded-full py-[6px] pl-4 pr-3">
                <span className="flex items-center justify-center gap-1">
                    {defaultOptionValue}
                    <span className="text-lg">
                        {children}
                    </span>
                    <IoIosArrowDown className="ml-1" />
                </span>
            </button>
            <ul className={`bg-white border-2 border-light-gray py-1 rounded-xl mt-[2px] overflow-hidden z-50 ${showDropdown ? 'absolute top-full' : 'hidden'}`}>
                {
                    options.map(option => (
                        <li
                            key={option.id}
                            onClick={() => handleChangeValue(option.value)}
                            className={`flex justify-between items-center gap-1 hover:bg-gray-200 px-4 py-[6px] text-sm cursor-pointer lg:text-nowrap ${option.value === defaultValue && 'bg-gray-100 font-medium'}`}>
                            {option.name}
                            <span className={`text-xs ${option.value === defaultValue ? 'block' : 'hidden'}`}>
                                <FaCheck />
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}