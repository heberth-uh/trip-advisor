import React, { useContext, useRef } from 'react'
import { MainContext } from '../context/MainContext'
// Components
import SelectionField from './widgets/SelectionField'
import Modal from './Modal'
import SelectionGrid from './widgets/SelectionGrid'

export default function Navbar() {
    const { lang, setLang, units, setUnits, currency, setCurrency, langList, unitList, currencyList } = useContext(MainContext)
    const currencyModalRef = useRef(null)

    const toggleDialog = (event, modalRef) => {
        event.preventDefault();
        if (!modalRef.current) {
            return;
        }
        modalRef.current.hasAttribute('open')
        ? modalRef.current.close()
        : modalRef.current.showModal()
    }

    return (
        <header>
            <h2><a href="/">Trip Advisor</a></h2>
            <ul>
                <li>
                    <SelectionField options={langList} defaultValue={lang} handlerValue={setLang} />
                </li>
                <li>
                    <SelectionField options={unitList} defaultValue={units} handlerValue={setUnits} />
                </li>
                <li>
                    <button onClick={(event) => toggleDialog(event, currencyModalRef)}>
                        Currency {currency}
                    </button>
                </li>
            </ul>
            <hr />
            <Modal modalRef={currencyModalRef} toggleModal={toggleDialog}>
                <SelectionGrid
                    options={currencyList}
                    defaultValue={currency}
                    handlerValue={setCurrency}
                    closeOnSelect={toggleDialog}
                    modalReftoClose={currencyModalRef}/>
            </Modal>
        </header>
    )
}
