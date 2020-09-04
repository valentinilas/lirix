/**
 * 
 * @param {String} url 
 * @param {String} method // *GET, POST, PUT, DELETE,
 * @param {Object?} headers 
 * @param {Object?} body 
 */
export const fetchData = (url, method, headers, body) => {
    return fetch(url, {
        method,
        headers,
        body
    }).then(response => {
        return (response.ok) ? (response.status === 204 ? Promise.resolve(null) : response.json()) : Promise.reject();
    })
}