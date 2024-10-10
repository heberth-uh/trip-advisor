import { useEffect, useState } from "react"
import { reviewsSample } from "../data/reviewsSample.js"
import { getReviews } from "../api/tripAdvisorApi.js"

export const useReviews = (place, placeId) => {
	const [reviews, setReviews] = useState([])
	const [isReviewsLoading, setIsReviewsLoading] = useState(true)

	useEffect(() => {
		// const fetchReviews = async () => {
		// 	try {
		// 		const data = await getReviews({ placeId })
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