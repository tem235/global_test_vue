import IProduct from "./IProduct";

export default interface ICartItem {
    productId: number;
    product: IProduct;
    count: number;
    size: string;
}
