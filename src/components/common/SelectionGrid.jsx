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
                            <p title={option.name}><span>{option.code}</span>{defaultValue === option.code && '✅'}</p>
                            <p><span>{option.name}</span></p>
                            <hr />
                        </li>
                    ))
                    }
                </ul>
            }
        </section>
    )
}