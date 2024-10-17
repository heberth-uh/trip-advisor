import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export default function Navbar() {
    const { lang, units, type, currency } = useContext(MainContext)
    return (
        <header>
            <h2>Trip Advisor</h2>
            <ul>
                <li>{lang}</li>
                <li>{units}</li>
                <li>{type}</li>
                <li>{currency}</li>
            </ul>
            <hr />
        </header>
    )
}
