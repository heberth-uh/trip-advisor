import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context/MainContext'
// Components
import Dropdown from './common/Dropdown'
import Modal from './Modal'
import SelectionGrid from './common/SelectionGrid'
import Logo from './Logo'
import Button from './common/Button'
// Icons
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CgRuler } from "react-icons/cg";
import { MdLanguage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch, IoMdClose } from "react-icons/io";


export default function Navbar() {
    const { lang, setLang, units, setUnits, currency, setCurrency, langList, unitList, currencyList, searchInputRef, scrollToSearch } = useContext(MainContext)
    const currencyModalRef = useRef(null)
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const toggleDialog = (event, modalRef) => {
        event.preventDefault();
        if (!modalRef.current) {
            return;
        }
        modalRef.current.hasAttribute('open')
            ? modalRef.current.close()
            : modalRef.current.showModal()
    }

    useEffect(()=>{
        document.body.style.overflow = showMenu ? 'hidden' : 'unset'
    }, [showMenu])

    const handleSearch = () => {
        // ⚠️ Background images in / are not loaded. It's important to fix it
        navigate('/')
        setTimeout(() => {
            searchInputRef?.current.focus();
        }, 100);
        setTimeout(() => {
            scrollToSearch()
        }, 150);
    }

    return (
        <header className='sticky top-0 left-0 z-50 bg-white border-b-[1px] lg:border-b-[2px] border-b-lighter-gray'>
            <div className='px-4 container flex justify-between items-center mx-auto py-4 lg:py-7'>
                <div className='lg:hidden'>
                    <span onClick={() => setShowMenu(true)} className="text-black text-2xl lg:text-3xl cursor-pointer">
                        <FiMenu />
                    </span>
                </div>
                <Logo />
                {/* Mobile Menu */}
                <div className={`lg:hidden absolute top-0 left-0 bg-white w-[100%] h-[100vh] z-50 ${showMenu ? 'translate-y-0 duration-200 ease-out' : '-translate-y-full duration-100'}`}>
                    <div className='container mx-auto px-6 pt-4'>
                        <div className='flex justify-between items-center'>
                            <h4 className='font-semibold text-xl'>
                                Settings
                            </h4>
                            <span onClick={() => setShowMenu(false)} className="text-black text-2xl lg:text-3xl cursor-pointer">
                                <IoMdClose />
                            </span>
                        </div>
                        <ul className='flex flex-col lg:flex gap-6 pt-8'>
                            <li className='flex justify-between items-center'>
                                <p className='font-medium text-sm'>Limits</p>
                                <Dropdown options={unitList} defaultValue={units} handlerValue={setUnits}>
                                    <CgRuler />
                                </Dropdown>
                            </li>
                            <li className='flex justify-between items-center'>
                                <p className='font-medium text-sm'>Language</p>
                                <Dropdown options={langList} defaultValue={lang} handlerValue={setLang} >
                                    <MdLanguage />
                                </Dropdown>
                            </li>
                            <li className='flex justify-between items-center'>
                                <p className='font-medium text-sm'>Currency</p>
                                <div>
                                    <Button
                                        handleOnclick={(event) => toggleDialog(event, currencyModalRef)}
                                        Icon={FaRegMoneyBillAlt}>
                                        {currency}
                                    </Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Desktop menu */}
                <ul className='hidden lg:flex gap-4'>
                    <li>
                        <Dropdown options={unitList} defaultValue={units} handlerValue={setUnits}>
                            <CgRuler />
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown options={langList} defaultValue={lang} handlerValue={setLang} >
                            <MdLanguage />
                        </Dropdown>
                    </li>
                    <li>
                        <Button
                            handleOnclick={(event) => toggleDialog(event, currencyModalRef)}
                            Icon={FaRegMoneyBillAlt}>
                            {currency}
                        </Button>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <span onClick={()=>handleSearch()} className="text-black text-2xl lg:text-3xl cursor-pointer" role='link'>
                        <IoIosSearch />
                    </span>
                </div>
                <Modal modalRef={currencyModalRef} toggleModal={toggleDialog} title={'Set the currency'}>
                    <SelectionGrid
                        options={currencyList}
                        defaultValue={currency}
                        handlerValue={setCurrency}
                        closeOnSelect={toggleDialog}
                        modalReftoClose={currencyModalRef} />
                </Modal>
            </div>
        </header>
    )
}
