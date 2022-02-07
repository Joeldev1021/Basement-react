export interface ItemArticle {
    id: number,
    name: string,
    price: number,
    img: string,
    count?: number
};

export interface CartItem {
    id: number,
    name: string,
    price: number,
    img: string,
    count: number
}
