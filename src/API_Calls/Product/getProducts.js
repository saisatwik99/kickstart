// Product API Calls
export function getProducts () {
    return fetch("http://localhost:5000/admin/company")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}

export function getWishlist (token) {
    return fetch(`http://localhost:5000/admin/wishlist?token=${token}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}

export function getProductInfo (productId) {
    return fetch(`http://localhost:5000/admin/companyInfo?companyId=${productId}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}