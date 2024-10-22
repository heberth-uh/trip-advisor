import { useContext, useEffect, useState } from "react"
import { getReviews } from "../api/tripAdvisorApi.js"
import { MainContext } from "../context/MainContext.jsx"
// Samples
import { reviewsSample } from "../data/test/reviewsSample.js"

export const useReviews = (place, placeId) => {
    const { currency, lang } = useContext(MainContext)

	const [reviews, setReviews] = useState([])
	const [isReviewsLoading, setIsReviewsLoading] = useState(true)

	useEffect(() => {
		// const fetchReviews = async () => {
		// 	try {
		// 		const data = await getReviews({ placeId, currency, lang })
		// 		setReviews(data.data)
		// 	} catch (error) {
		// 		alert(error)
		// 	} finally {
		// 		setIsReviewsLoading(false)
		// 	}
		// }
		// fetchReviews()

		// for testing with static data
		setTimeout(() => {
			setReviews(reviewsSample.data)
			setIsReviewsLoading(false)
		}, 500)

	}, [place])

	return { reviews, isReviewsLoading }
}