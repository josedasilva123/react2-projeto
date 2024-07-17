export interface IProduct{
    id: number;
    name: string;
    price: number;
    img: string;
}

export interface ICartProduct extends IProduct{
    quantity: number;
}