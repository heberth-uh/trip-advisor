export default function SelectionField({options, defaultValue, handlerValue}) {

    const handleTypeSelection = (e) => {
        handlerValue(e.target.value)
    }

    return (
        <select name="searchType"
            onChange={handleTypeSelection}
            value={defaultValue}
        >
            {
                options.map(option => (
                    <option key={option.id} value={option.value} selected={option.selected}>{option.name}</option>
                ))
            }
        </select>
    )
}