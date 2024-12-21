import React, { useContext, useRef } from 'react'
import { MainContext } from '../context/MainContext'
// Components
import SelectionField from './widgets/SelectionField'
import Modal from './Modal'
import SelectionGrid from './widgets/SelectionGrid'
import Logo from './Logo'
// Icons
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgRuler } from "react-icons/cg";


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
        <header className='flex items-center lg:justify-between container mx-auto py-7'>
            <Logo />
            <ul className='hidden lg:flex gap-4'>
                <li>
                    <SelectionField options={unitList} defaultValue={units} handlerValue={setUnits}>
                        <CgRuler/>
                    </SelectionField>
                </li>
                <li>
                    <SelectionField options={langList} defaultValue={lang} handlerValue={setLang} >
                        <FaRegMoneyBillAlt/>
                    </SelectionField>
                </li>
                <li>
                    <button onClick={(event) => toggleDialog(event, currencyModalRef)}>
                        Currency {currency}
                    </button>
                </li>
            </ul>
            <Modal modalRef={currencyModalRef} toggleModal={toggleDialog}>
                <SelectionGrid
                    options={currencyList}
                    defaultValue={currency}
                    handlerValue={setCurrency}
                    closeOnSelect={toggleDialog}
                    modalReftoClose={currencyModalRef} />
            </Modal>
        </header>
    )
}
