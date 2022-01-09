export function getPricingTestinomials () {
    return fetch("https://kickstart-backend.herokuapp.com/admin/pricingTestinomial")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}