// Product API Calls
export function getProducts () {
    return fetch("https://kickstart-backend.herokuapp.com/admin/company")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}

export function getWishlist (token) {
    return fetch(`https://kickstart-backend.herokuapp.com/admin/wishlist?token=${token}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}

export function getProductInfo (productId) {
    return fetch(`https://kickstart-backend.herokuapp.com/admin/companyInfo?companyId=${productId}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}