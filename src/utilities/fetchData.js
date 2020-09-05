/**
 * 
 * @param {String} url 
 * @param {String} method // *GET, POST, PUT, DELETE,
 * @param {Object?} headers 
 * @param {Object?} body 
 */
export const fetchData = (url, method, body, headers) => {
    return fetch(url, {
        method,
        body,
        headers,
    }).then(response => {
        return (response.ok) ? (response.status === 204 ? Promise.resolve(null) : response.json()) : Promise.reject();
    })
}