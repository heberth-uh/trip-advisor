// Icons
import { FaCheck } from "react-icons/fa";

export default function SelectionGrid({ options, defaultValue, handlerValue, closeOnSelect, modalReftoClose }) {

    const handleChangeValue = (event, value) => {
        event.preventDefault()
        handlerValue(value)
        closeOnSelect(event, modalReftoClose)
    }

    return (
        <section>
            {!options ? <p>No items availabl</p> :
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-6">
                    {options.map(option => (
                        <button key={option.code} onClick={(event) => handleChangeValue(event, option.code)}
                            className={`rounded-lg px-3 py-2 ${defaultValue === option.code ? 'bg-black hover:bg-black/80 text-white' : 'bg-secondary hover:bg-light-gray text-black'}`}>
                            <p title={option.name} className="flex flex-col justify-start items-start">
                                <span className="flex items-center justify-between w-full text-base font-medium">
                                    {option.code}
                                    {defaultValue === option.code && <FaCheck/>}
                                </span>
                                <span className="text-xs">
                                    {option.name}
                                </span>
                            </p>
                        </button>
                    ))
                    }
                </ul>
            }
        </section>
    )
}