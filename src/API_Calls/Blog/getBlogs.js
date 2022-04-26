export function getBlogs (currentPage, pageItems) {
    return fetch(`http://localhost:5000/admin/blog?pageNum=${currentPage}&pageSize=${pageItems}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}