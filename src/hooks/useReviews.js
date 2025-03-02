import { useContext, useEffect, useState } from "react"
import { getReviews } from "../api/tripAdvisorApi.js"
import { MainContext } from "../context/MainContext.jsx"
// Samples
// import { reviewsSample } from "../data/test/reviewsSample.js"

export const useReviews = (place, placeId) => {
    const { currency, lang } = useContext(MainContext)

	const [reviews, setReviews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const data = await getReviews({ placeId, currency, lang })
                if (data.message || data.errors) throw new Error(data.message || data.errors[0].message || `Error fetching ${type} reviews`)
				setReviews(data.data)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchReviews()

		// for testing with static data
		// setTimeout(() => {
		// 	setReviews(reviewsSample.data)
		// 	setIsLoading(false)
		// }, 500)

	}, [place])

	return { reviews, isLoading, error }
}