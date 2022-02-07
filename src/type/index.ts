interface Option {
    label: string;
    values: string[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
    options:Option[];
    img: string
};

export interface CartItem {
    id: number,
    name: string,
    price: number,
    img: string,
    options:Option[],
    count: number
}

export interface InitialState {
    items: Product[],
    itemCart: CartItem[]
}
