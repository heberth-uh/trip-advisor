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
                <ul>
                    {options.map(option => (
                        <li key={option.code} onClick={(event) => handleChangeValue(event, option.code)}>
                            <p>{option.name} {defaultValue === option.code && '✅'} <span>{option.symbol}</span></p>
                            <hr />
                        </li>
                    ))
                    }
                </ul>
            }
        </section>
    )
}