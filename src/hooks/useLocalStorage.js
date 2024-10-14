import { useEffect, useContext } from "react"
import { MainContext } from "../context/MainContext"

export const useLocalStorage = () => {
    const {type, setType} = useContext(MainContext)

    useEffect( () => {
        const stared_type = window.localStorage.getItem('type')
        
        if (!stared_type) {
            window.localStorage.setItem('type', 'attractions')
            setType('attractions')
        }
        else {
            setType(stared_type)
        }
    }, [type])

    const storageValue = (key, value) => {
        window.localStorage.setItem(key, value)
        setType(value)
    }

    return { type, storageValue }
}