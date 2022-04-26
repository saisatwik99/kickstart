// Testimonial API Call
export function getPricingTestinomials () {
    return fetch("http://localhost:5000/admin/pricingTestinomial")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}