export default function SelectionField({options, defaultValue, handlerValue, closeGrid}) {

    console.log('closeGrid', closeGrid)

    const handleChangeValue = (e) => {
        handlerValue(e.target.value)
    }

    return (
        <select name="searchType"
            onChange={handleChangeValue}
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