import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
// Components
import SelectionField from './widgets/SelectionField'

export default function Navbar() {
    const { lang, setLang, units, setUnits, type, currency, langList, unitList } = useContext(MainContext)
    return (
        <header>
            <h2>Trip Advisor</h2>
            <ul>
                <li>
                    <SelectionField options={langList} defaultValue={lang} handlerValue={setLang} />
                </li>
                <li>
                    <SelectionField options={unitList} defaultValue={units} handlerValue={setUnits} />
                </li>
                <li>{currency}</li> {/* Create a modal due the currency has plenty options */}
            </ul>
            <hr />
        </header>
    )
}
