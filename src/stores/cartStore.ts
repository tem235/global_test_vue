import ICartItem from '@/types/ICartItem'
import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cartStore',
    state: () => ({
        cart: <ICartItem[]>[]
    }),
    getters: {
        getCart: state => state.cart,
        getAllCounter: state => state.cart.reduce((acc, sum) => {
            return acc += sum.count
        }, 0),
        getSumPrice: state => state.cart.reduce((acc, sum) => {
            return acc + (sum.product.defaultDisplayedPrice * sum.count)
        }, 0)
    },
    actions: {
        setCartFromLS(items: ICartItem[]) {
            this.cart = items
        },
        addItemInCart(item: ICartItem) {
            let cartItem = this.cart.find(cartItem => cartItem.productId === item.productId)

            if (cartItem?.size === item?.size) {
                cartItem.count += item.count
            } else {
                this.cart.push(item)
            }
            this.saveToLS()
        },
        saveToLS() {
            localStorage.setItem('cart', JSON.stringify(this.getCart));
        },
        createOrder() {
            alert(`Общая стоимость ${this.getSumPrice} рублей`)
            localStorage.removeItem("cart");
            this.cart = []
        },
        deleteItemInCart(index: number) {
            this.cart.splice(index, 1)
            this.saveToLS()
        }
    },
});
