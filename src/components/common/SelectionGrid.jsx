export default function SelectionGrid({ options, defaultValue, handlerValue, closeOnSelect, modalReftoClose }) {

    // special css styles for 'defaultValue'

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
                            className={`rounded-lg px-2 py-1 ${defaultValue === option.code ? 'bg-black hover:bg-black/80 text-white' : 'bg-secondary hover:bg-light-gray text-black'}`}>
                            <p title={option.name} className="flex flex-col justify-start items-start">
                                <span>
                                    {option.code}
                                    {defaultValue === option.code && '✅'}
                                </span>
                                <span className="text-xs text-start">
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