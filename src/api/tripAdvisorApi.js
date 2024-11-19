import { buildUrl } from "../utils/buildUrl";

const RAPIDAPI_HOST = 'travel-advisor.p.rapidapi.com'
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
    },
};

// Get list of locations by a string
export const getLocation = async ({ query, lang, units, currency, sort }) => {
    const base_url = `https://${RAPIDAPI_HOST}/locations/search?`;
    const params = { query, lang, units, currency, sort }
    const url = buildUrl(base_url, params)

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

// Get list of places (attractions, hotels or restaurants) by locations and parameters
export const getPlacesList = async ({ type, locationId, lang, units, currency, sortPlaces, minRating }) => {
    const base_url = `https://${RAPIDAPI_HOST}/${type}/list?`
    const params = { location_id: locationId, currency, lang, lunit: units, sort: sortPlaces, min_rating: minRating }
    const url = buildUrl(base_url, params)

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

// Get place (attraction, hotel or restaurant) details by its id
export const getPlacesDetails = async ({ type, placeId, currency, lang }) => {
    const base_url = `https://travel-advisor.p.rapidapi.com/${type}/get-details?`;
    const params = { location_id: placeId, currency, lang }
    const url = buildUrl(base_url, params)

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

// Get the reviews of a place by its id
export const getReviews = async ({ placeId, currency, lang }) => {
    const base_url = `https://${RAPIDAPI_HOST}/reviews/list?`;
    const params = { location_id: placeId, limit: 20, currency, lang }
    const url = buildUrl(base_url, params)

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}
