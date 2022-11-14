import client from "./api";

export function getProducts(params?: object) {
    return client.get(`/products`, { params: params })
        .then(res => res.data.items)
}

export function getProductById(id: string) {
    return client.get(`/products/${id}`)
        .then(res => res.data)
}
