import httpBuildQuery from "http-build-query";

const RAPIDAPI_HOST = 'travel-advisor.p.rapidapi.com'
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
    },
};

export const getLocation = async ({ searchString }) => {
    const url = `https://${RAPIDAPI_HOST}/locations/search?query=${searchString}&lang=en_US&units=km`;

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

// Get list of places (attractions, hotels or restaurants) by locations and parameters
export const getPlacesList = async ({ locationId, type }) => {
    const base = `https://${RAPIDAPI_HOST}/${type}/list?`

    // these params must be dynamic from useState in usePlacesList hook
    const params = {
        location_id: locationId,
        bar: false,
        currency: 'USD',
        lang: 'en_US',
        lunit: 'km',
        sort: 'recommended',
    }

    // Clean the object params with empty values
    const filtered_params = Object.fromEntries(
        Object.entries(params).filter(a => (
            !['', false, null].includes(a[1])
        ))
    )

    const url = base + httpBuildQuery(filtered_params)

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}

export const getPlacesDetails = async ({ placeId, type, params }) => {
    const url = `https://travel-advisor.p.rapidapi.com/${type}/get-details?location_id=${placeId}&currency=USD&lang=en_US`;
    console.log('url>> ', url)
    // params formatting goes here
    // params = {...params, location_id: 'placeId', currency: 'USD', lang: 'en_US'}

    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}
