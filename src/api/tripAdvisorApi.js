const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    },
};

export const getLocation = async ({searchString}) => {
    const url = `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchString}&lang=en_US&units=km`;

    return fetch(url, options)
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch((err) => {
        return err
    })
}