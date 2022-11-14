import client from "./api";

export function getCategories() {
    return client.get(`/categories`)
        .then(res => res.data.items)
}

export function getCategoryById(id: string) {
    return client.get(`/categories/${id}`)
        .then(res => res.data)
}
