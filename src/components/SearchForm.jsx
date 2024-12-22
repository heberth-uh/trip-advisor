import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import Dropdown from "./common/Dropdown";

export default function SearchForm({ searchString, setSearchString, searchLocations, isLoading }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const { type, setType, typeList } = useContext(MainContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ search: searchString})
        searchLocations()
    }

    const handleChangeString = (e) => {
        if (e.target.value.startsWith(' ')) return
        setSearchString(e.target.value)
    }

    return (
        <div>
            <h1>Where to go?</h1>
            <p>Search for {type} in...</p>
            <form onSubmit={handleSubmit}>
                <Dropdown options={typeList} defaultValue={type} handlerValue={setType} />
                <input
                    type="text"
                    placeholder='Paris, Madrid, New York...'
                    value={searchString}
                    onChange={handleChangeString}
                />
                <button type="submit" disabled={isLoading || searchString.length < 3}>Search</button>
            </form>
        </div>
    )
}