import { useLocation } from "react-router-dom"

export function useURLParam(query) {
    const location = useLocation()
    const urlParam = new URLSearchParams(location.search).get(query) || ''
    return urlParam
}