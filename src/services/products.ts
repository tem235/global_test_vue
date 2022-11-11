import client from "./api";

export function getProducts() {
    client.get(`/${process.env.VUE_APP_STORE_ID}/products`)
        .then(res => console.log(res))
}
