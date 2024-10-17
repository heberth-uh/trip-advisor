import httpBuildQuery from "http-build-query";

// This method creates a http query and concats itsef with the base_url
export const buildUrl = (base_url, params) => {
    const filtered_params = Object.fromEntries( // Checks if any key has an empty value, if so, is removed
        Object.entries(params).filter(a => (
            !['', false, null].includes(a[1])
        ))
    )
    return base_url + httpBuildQuery(filtered_params)
}
