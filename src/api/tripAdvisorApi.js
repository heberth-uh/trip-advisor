const RAPIDAPI_HOST ='travel-advisor.p.rapidapi.com'
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

export const getAttractions = async ({ locationId }) => {
    const url = `https://${RAPIDAPI_HOST}/attractions/list?location_id=${locationId}&currency=USD&lang=en_US&lunit=km&sort=recommended`;
    return fetch(url, options)
        .then(res => res.json())
        .then(data => {
            return data
        })
}
