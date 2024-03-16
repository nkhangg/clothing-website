interface IProduct {
    id: string;
    thumnail: string;
}

interface IColor {
    id: number;
    color: string;
    repositories: number;
}

interface ISize {
    id: number;
    label: ESize;
    colors: IColor[];
}

interface IProductDetail extends IProduct {
    isNew: boolean;
    isSoldOut: boolean;
    promotion: {
        value: number;
        end_date: string;
    };
    description: string;
    brand: string;
    rate: number;
    name: string;
    price: number;
    colors: IColor[];
    sizes: ISize[];
    images: string[];
}
